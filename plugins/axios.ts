import { defineNuxtPlugin } from "nuxt/app";
import { useAuthStore } from "~/stores/auth";
import axios, { type AxiosRequestConfig, type AxiosError } from "axios";
import { navigateTo } from "nuxt/app";
import { useRuntimeConfig } from "nuxt/app";
export default defineNuxtPlugin((nuxtApp) => {
  // Hàm async để giải quyết runtimeConfig
  const initAxios = async () => {
    const runtimeConfig = await nuxtApp.runWithContext(() =>
      useRuntimeConfig()
    );

    // Khởi tạo instance axios với baseURL từ runtimeConfig
    const axiosInstance = axios.create({
      baseURL: runtimeConfig.public.apiBase as string, // Ép kiểu thành string
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Thêm interceptor cho request
    axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const authStore = useAuthStore();

        if (authStore.token && typeof authStore.token === "string") {
          config.headers = config.headers || {};
          const headers = config.headers as Record<string, string>;
          headers.Authorization = `Bearer ${authStore.token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Thêm interceptor cho response
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const statusCode = error.response?.status;

        if (process.client && statusCode === 401) {
          const authStore = useAuthStore();
          authStore.token = null;
          console.warn(
            "Token hết hạn hoặc không hợp lệ, vui lòng đăng nhập lại."
          );
          return navigateTo("/login");
        }

        console.error("Lỗi từ Axios:", error.message);
        return Promise.reject(error);
      }
    );

    return axiosInstance;
  };

  // Gọi hàm async và cung cấp axiosInstance
  const axiosInstance = nuxtApp.runWithContext(() => initAxios());

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});

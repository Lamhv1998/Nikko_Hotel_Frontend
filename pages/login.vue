<template>
  <div class="flex h-screen">
    <!-- Left Section -->
    <div
      class="w-1/2 flex flex-col justify-center items-center bg-gray-50 px-16"
    >
      <div class="mb-8">
        <img src="assets/images/logo.jpg" alt="Logo Hotel" class="h-12 mb-4" />
        <h1 class="text-3xl font-bold mb-2">Đăng Nhập</h1>
        <p class="text-gray-600">
          Hãy đăng ký nếu bạn chưa có tài khoản.
          <router-link
            to="/register"
            class="text-yellow-500 font-semibold hover:underline"
          >
            Đăng Ký ngay!
          </router-link>
        </p>
      </div>
      <form @submit.prevent="handleLogin" class="w-full max-w-md">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <div class="relative">
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Nhập địa chỉ Email của bạn"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <span
              class="absolute inset-y-0 right-3 flex items-center text-gray-400"
            >
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Mật khẩu
          </label>
          <div class="relative">
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Nhập mật khẩu của bạn"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <span
              class="absolute inset-y-0 right-3 flex items-center text-gray-400"
            >
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="flex items-center justify-between mb-6">
          <label class="flex items-center text-sm text-gray-600">
            <input type="checkbox" class="mr-2" />
            Ghi nhớ tôi
          </label>
          <router-link
            to="/forgot-password"
            class="text-sm text-yellow-500 hover:underline"
          >
            Quên mật khẩu?
          </router-link>
        </div>
        <button
          type="submit"
          class="w-full py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Login
        </button>
      </form>
      <div class="mt-6 text-center">
        <p class="text-gray-600">Tiếp tục với</p>
        <div class="flex justify-center mt-2 space-x-4">
          <button class="p-2 bg-blue-600 text-white rounded-full">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button class="p-2 bg-red-500 text-white rounded-full">
            <i class="fab fa-google"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-1/2">
      <img
        src="assets/images/logo.jpg"
        alt="Login Background"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const email = ref("");
const password = ref("");

function handleLogin() {
  // Handle login logic
}
</script>

<style>
/* Add any additional custom styles here */
</style>

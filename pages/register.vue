<template>
  <div class="flex h-screen">
    <!-- Background Image -->
    <div class="w-1/2 flex justify-end items-center">
      <img
        src="/assets/images/logo.jpg"
        alt="Đăng ký"
        class="h-[500px] w-auto object-contain rounded-xl"
      />
    </div>

    <!-- Form -->
    <div class="w-1/2 flex flex-col justify-center items-center px-16">
      <div class="mb-8">
        <img src="/assets/images/logo.jpg" alt="Logo Hotel" class="h-12 mb-4" />
        <h1 class="text-3xl font-bold mb-2">Đăng Ký</h1>
        <p class="text-gray-500">Hãy đăng nhập nếu đã có tài khoản</p>
        <a href="#" class="text-yellow-500">Đăng nhập ngay!</a>
      </div>

      <form @submit.prevent="handleRegister" class="w-full max-w-md">
        <!-- Email -->
        <div class="mb-4">
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Email</label
          >
          <div class="relative">
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Nhập địa chỉ email của bạn"
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

        <!-- Username -->
        <div class="mb-4">
          <p v-if="errors.username" class="text-red-500 text-sm mt-1">
            {{ errors.username }}
          </p>

          <label for="text" class="block text-sm font-medium text-gray-700 mb-2"
            >Tên tài khoản</label
          >
          <div class="relative">
            <input
              type="username"
              id="username"
              v-model="username"
              placeholder="Tên tài khoản của bạn"
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

        <!-- Password -->
        <div class="mb-4">
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">
            {{ errors.password }}
          </p>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Mật khẩu</label
          >
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Nhập mật khẩu của bạn"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <span
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="mb-4">
          <p v-if="errors.confirm_password" class="text-red-500 text-sm mt-1">
            {{ errors.confirm_password }}
          </p>
          <label
            for="confirm_password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Nhập lại mật khẩu</label
          >
          <div class="relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirm_password"
              v-model="confirm_password"
              placeholder="Nhập lại mật khẩu"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <span
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <i
                :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
              ></i>
            </span>
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Đăng ký
        </button>
      </form>
      <OtpModal
        :visible="showModal"
        @submit="handleOtpSubmit"
        @close="showModal = false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
// import OtpModal from "@/components/modals/OtpModal.vue";

const email = ref("");
const username = ref("");
const password = ref("");
const confirm_password = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const showModal = ref(false);

const errors = ref({
  email: "",
  username: "",
  password: "",
  confirm_password: "",
});

function handleRegister() {
  if (!validateFields()) return;

  // call API
  console.log("Đăng ký thành công với:", email.value, password.value);
}

function validateFields() {
  let isValid = true;

  // Reset lỗi
  errors.value = {
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  };

  if (!email.value || !email.value.includes("@")) {
    errors.value.email = "Email không hợp lệ.";
    isValid = false;
  }

  if (!username.value || username.value.length < 3) {
    errors.value.username = "Tên tài khoản phải từ 3 ký tự.";
    isValid = false;
  }

  if (!password.value || password.value.length < 6) {
    errors.value.password = "Mật khẩu phải từ 6 ký tự.";
    isValid = false;
  }

  if (password.value !== confirm_password.value) {
    errors.value.confirm_password = "Mật khẩu không khớp.";
    isValid = false;
  }

  return isValid;
}

function handleOtpSubmit(code: string) {
  console.log("OTP nhập:", code);
  // Gửi mã OTP đến backend
  showModal.value = false;
}
</script>

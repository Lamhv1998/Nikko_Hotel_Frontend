<template>
  <header class="fixed w-full z-30 transition-all duration-300" :class="{ 'bg-white shadow-md py-4 h-16': scrolled, 'bg-transparent h-12': !scrolled }">
    <div class="container mx-auto flex justify-between items-center h-full">
      <!-- Initial State (Top of Page) -->
      <div v-if="!scrolled" class="flex items-center space-x-4">
        <div class="text-2xl font-bold">
          <img src="/images/logo.jpg" alt="Logo Hotel" class="h-8" />
        </div>
        <button class="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 text-sm">
          Đặt Phòng Ngay
        </button>
      </div>

      <!-- Expanded State (When Scrolled) -->
      <div v-if="scrolled" class="flex items-center w-full justify-between">
        <!-- Top Bar (Contact Info & Language) -->
        <div class="flex items-center space-x-6 text-sm text-gray-600">
          <a href="tel:+1234567890" class="hover:text-blue-600">+12 345 678 910</a>
          <a href="mailto:info@teamdevhotels.com" class="hover:text-blue-600">info@teamdevhotels.com</a>
          <div class="flex space-x-2">
            <span>EN</span> | <span class="hover:text-blue-600 cursor-pointer">VN</span>
          </div>
        </div>

        <!-- Logo -->
        <div class="text-2xl font-bold">
          <img src="/images/logo.jpg" alt="Logo Hotel" class="h-10" />
        </div>

        <!-- Navigation and Actions -->
        <div class="flex items-center space-x-8">
          <!-- Search Bar -->
          <div class="relative">
            <input
              type="text"
              placeholder="Check-in, Check-out, Guests..."
              class="border rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button class="absolute right-2 top-2 text-gray-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Navigation -->
          <nav class="flex space-x-6">
            <a href="#" class="text-gray-700 hover:text-blue-600">Trang Chủ</a>
            <a href="#" class="text-gray-700 hover:text-blue-600">Phòng</a>
            <a href="#" class="text-gray-700 hover:text-blue-600">Liên Hệ</a>
          </nav>

          <!-- Booking Button and Account -->
          <div class="flex items-center space-x-4">
            <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Đặt Phòng Ngay
            </button>
            <div class="relative">
              <button @click="toggleAccount" class="focus:outline-none">
                <svg class="w-6 h-6 text-gray-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
              <div v-if="showAccount" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đăng nhập</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đăng ký</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quên mật khẩu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      scrolled: false,
      showAccount: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 10 // Hiển thị header đầy đủ khi cuộn xuống 10px
    },
    toggleAccount() {
      this.showAccount = !this.showAccount
    }
  }
}
</script>
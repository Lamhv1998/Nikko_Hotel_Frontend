<template>
  <header class="bg-white shadow-md py-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <img src="assets/images/logo.jpg" alt="Logo Hotel" class="h-10" />
      </div>
      <!-- Navigation -->
      <nav class="flex items-center space-x-6 pr-6">
        <NuxtLink to="#" class="text-gray-700 hover:text-blue-600"
          >Trang Chủ</NuxtLink
        >
        <NuxtLink to="#" class="text-gray-700 hover:text-blue-600"
          >Phòng</NuxtLink
        >
        <NuxtLink to="#" class="text-gray-700 hover:text-blue-600"
          >Liên Hệ</NuxtLink
        >
        <NuxtLink to="/register" class="text-gray-700 hover:text-blue-600"
          >Đăng ký</NuxtLink
        >
        <button
          class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Đặt Phòng Ngay
        </button>
      </nav>
    </div>
  </header>
</template>
  
  <script>
export default {
  name: "Header",
};
</script>
<template>
    <header class="bg-white shadow-md py-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold">
          <img src="assets/images/logo.jpg" alt="Logo Hotel" class="h-10" />
        </div>
        <!-- Navigation -->
        <nav class="flex space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-600">Trang Chủ</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Phòng</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Liên Hệ</a>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Đặt Phòng Ngay
          </button>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
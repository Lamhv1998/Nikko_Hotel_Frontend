<template>
  <footer class="bg-blue-900 text-white py-10">
    <div class="container mx-auto grid grid-cols-4 gap-8">
      <!-- Brand Section -->
      <div>
        <div class="flex items-center mb-4">
          <img src="/images/logo.jpg" alt="Logo Hotel" class="h-10 mr-2" />
          <p class="text-xl font-bold">Team Dev Hotels</p>
        </div>
        <p class="text-sm">10 - Quận 1, Thành Phố Hồ Chí Minh</p>
        <p class="text-sm">+12 345 678 910</p>
        <p class="text-sm">TeamDev@gmail.com</p>
      </div>

      <!-- Giới Thiệu Section -->
      <div>
        <p class="font-bold text-lg mb-4">Giới Thiệu</p>
        <a href="#" class="block text-sm hover:text-yellow-400 mb-2">Liên hệ</a>
        <a href="#" class="block text-sm hover:text-yellow-400">Điều khoản & Điều kiện</a>
      </div>

      <!-- Social Media Section -->
      <div>
        <p class="font-bold text-lg mb-4">Kết Nối Với Chúng Tôi</p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-yellow-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="#" class="hover:text-yellow-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="#" class="hover:text-yellow-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.58 8.06 8.06 9.5v-6.72H7.54v-2.78h2.56V9.94c0-2.54 1.5-3.94 3.82-3.94 1.1 0 2.26.2 2.26.2v2.48h-1.28c-1.26 0-1.66.78-1.66 1.58v1.9h2.82l-.46 2.78h-2.36V21c4.48-1.44 8.06-5.1 8.06-9.5 0-5.5-4.46-9.96-9.96-9.96z"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Newsletter Subscription Section -->
      <div>
        <p class="font-bold text-lg mb-4">Đăng ký nhận thông báo</p>
        <p class="text-sm mb-4">Nhận ưu đãi mới nhất từ Team Dev Hotels!</p>
        <div class="flex">
          <input type="email" placeholder="Email Address" class="px-4 py-2 rounded-l-md text-black w-48 focus:outline-none">
          <button class="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600">OK</button>
        </div>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="border-t border-gray-700 mt-8 pt-4 text-center">
      <p class="text-sm">© 2025 Team Dev Hotels. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
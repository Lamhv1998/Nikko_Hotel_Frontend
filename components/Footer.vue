<template>
  <footer class="bg-blue-900 text-white py-6">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Left Section -->
      <div class="mb-4 md:mb-0">
        <p class="font-bold">Team Dev</p>
        <p>10 - Quận 1, Thành Phố Hồ Chí Minh</p>
        <p>+12 345 678 910</p>
        <p>TeamDev@gmail.com</p>
      </div>

      <!-- Giới Thiệu Section -->
      <div class="mb-4 md:mb-0">
        <p class="font-bold">Giới Thiệu</p>
        <p>Liên hệ</p>
        <p>Điều khoản & Điều kiện</p>
      </div>

      <!-- Social Media Section -->
      <div class="mb-4 md:mb-0">
        <p class="font-bold">Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>

      <!-- Newsletter Subscription Section -->
      <div class="mb-4 md:mb-0">
        <p class="font-bold mb-2">Đăng ký nhận thông báo của chúng tôi</p>
        <div class="flex">
          <input type="email" placeholder="Email Address" class="px-4 py-2 rounded-l-md text-black w-48 focus:outline-none">
          <button class="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600">OK</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
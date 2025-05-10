<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Banner -->
    <section class="relative">
      <img src="/images/banner.jpg" alt="Banner" class="w-full h-[600px] object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
        <h1 class="text-5xl font-bold mb-4">WELCOME TO TEAM DEV HOTELS</h1>
        <p class="text-lg mb-6">Đặt phòng với tầm nhìn tuyệt vời sang trọng với mức giá phải chăng nhất.</p>
        <button class="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 14h10"></path>
          </svg>
          ĐẶT PHÒNG NGAY
        </button>
      </div>
    </section>

    <!-- Thông tin các loại phòng -->
    <section class="py-16 bg-white">
      <!-- Dịch vụ nổi bật -->
      <section class="py-8 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <!-- Welcome Drinks -->
            <div class="flex flex-col items-center">
              <div class="bg-orange-100 rounded-full p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                  <path
                    d="M14.436 30.4659H35.7871M14.0917 26.4482H36.1316M36.8657 17.884L35.2581 36.6398C35.0803 38.7142 34.9913 39.7512 34.5303 40.5361C34.1243 41.2272 33.5216 41.7811 32.7983 42.1266C31.977 42.5189 30.936 42.519 28.854 42.519H21.3708C19.2888 42.519 18.2471 42.5189 17.4257 42.1266C16.7024 41.7811 16.0994 41.2272 15.6934 40.536C15.2324 39.7512 15.1435 38.7142 14.9657 36.6398L13.358 17.884C13.2543 16.6733 13.2024 16.0678 13.4062 15.6007C13.5853 15.1903 13.8963 14.8516 14.2899 14.6381C14.7379 14.3952 15.3455 14.3952 16.5606 14.3952H33.6638C34.8789 14.3952 35.4868 14.3952 35.9348 14.6381C36.3284 14.8516 36.6387 15.1903 36.8177 15.6007C37.0215 16.0678 36.9695 16.6733 36.8657 17.884ZM35.6528 14.3952H14.5714C12.7602 14.3952 11.8546 14.3952 11.3286 14.0161C10.8648 13.6819 10.5656 13.1659 10.5055 12.5974C10.4374 11.9526 10.8871 11.1664 11.7857 9.59387C12.457 8.41909 12.7926 7.83169 13.2637 7.40376C13.6848 7.02119 14.1823 6.73239 14.7234 6.55655C15.3287 6.35986 16.005 6.35986 17.3581 6.35986H32.8668C34.2198 6.35986 34.8963 6.35986 35.5016 6.55655C36.0427 6.73239 36.5398 7.02119 36.9609 7.40376C37.432 7.83169 37.7676 8.41909 38.4389 9.59387C39.3375 11.1664 39.787 11.9526 39.7189 12.5974C39.6588 13.1659 39.36 13.6819 38.8962 14.0161C38.3702 14.3952 37.464 14.3952 35.6528 14.3952Z"
                    stroke="#E0B973" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p class="text-sm font-semibold">Welcome<br />Drinks</p>
            </div>

            <!-- Car Rent -->
            <div class="flex flex-col items-center">
              <div class="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M6 22H42M40 34V23.3582C40 22.8511 40.0002 22.5977 39.9688 22.3484C39.9408 22.127 39.8941 21.9081 39.8297 21.6944C39.7571 21.4538 39.6539 21.2223 39.448 20.759L36.3555 13.8008C35.744 12.4251 35.4383 11.737 34.9551 11.2327C34.5279 10.7868 34.0041 10.446 33.4232 10.2367C32.766 10 32.0126 10 30.5071 10H17.4922C15.9867 10 15.2343 10 14.5771 10.2367C13.9963 10.446 13.4721 10.7868 13.0449 11.2327C12.5617 11.737 12.2557 12.4251 11.6443 13.8008L8.55176 20.759C8.34582 21.2223 8.24244 21.4538 8.16992 21.6944C8.10551 21.9081 8.05937 22.127 8.03144 22.3484C8 22.5977 8 22.8511 8 23.3582V34M40 34L8 34M40 34V36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36V34M8 34V36C8 38.2091 9.79086 40 12 40C14.2091 40 16 38.2091 16 36V34"
                    stroke="#E0B973" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p class="text-sm font-semibold">Car<br />Rent Service</p>
            </div>

            <!-- Resort & Spa -->
            <div class="flex flex-col items-center">
              <div class="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M22.8302 4.79021C23.5925 4.55593 24.4075 4.55593 25.1698 4.79021L31.1412 6.62555C34.2565 7.58303 37.2151 8.99075 39.9232 10.8041C42.0295 12.2144 41.0311 15.4999 38.4962 15.4999H9.50381C6.96891 15.4999 5.97052 12.2144 8.07682 10.8041C10.7849 8.99076 13.7435 7.58303 16.8588 6.62555L22.8302 4.79021ZM24.2884 7.65782C24.1005 7.60006 23.8995 7.60006 23.7116 7.65782L17.7401 9.49316C15.3785 10.219 13.1158 11.2291 11.0014 12.4999H36.9986C34.8842 11.2291 32.6215 10.219 30.2599 9.49316L24.2884 7.65782Z"
                    fill="#E0B973" />
                  <path
                    d="M8.5 41.9999C8.5 41.1715 9.17157 40.4999 10 40.4999H38C38.8284 40.4999 39.5 41.1715 39.5 41.9999C39.5 42.8284 38.8284 43.4999 38 43.4999H10C9.17157 43.4999 8.5 42.8284 8.5 41.9999Z"
                    fill="#E0B973" />
                  <path
                    d="M12.5 33.9999C12.5 34.8284 13.1716 35.4999 14 35.4999C14.8284 35.4999 15.5 34.8284 15.5 33.9999L15.5 21.9999C15.5 21.1715 14.8284 20.4999 14 20.4999C13.1716 20.4999 12.5 21.1715 12.5 21.9999L12.5 33.9999Z"
                    fill="#E0B973" />
                  <path
                    d="M24 35.4999C23.1716 35.4999 22.5 34.8284 22.5 33.9999L22.5 21.9999C22.5 21.1715 23.1716 20.4999 24 20.4999C24.8284 20.4999 25.5 21.1715 25.5 21.9999V33.9999C25.5 34.8284 24.8284 35.4999 24 35.4999Z"
                    fill="#E0B973" />
                  <path
                    d="M32.5 33.9999C32.5 34.8284 33.1716 35.4999 34 35.4999C34.8284 35.4999 35.5 34.8284 35.5 33.9999V21.9999C35.5 21.1715 34.8284 20.4999 34 20.4999C33.1716 20.4999 32.5 21.1715 32.5 21.9999V33.9999Z"
                    fill="#E0B973" />
                </svg>
              </div>
              <p class="text-sm font-semibold">Resort<br />& Spa</p>
            </div>

            <!-- Free Wifi -->
            <div class="flex flex-col items-center">
              <div class="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M16.6865 29.1801C17.6182 28.181 18.7447 27.3834 19.9966 26.8365C21.2484 26.2895 22.5986 26.0048 23.9647 26C25.3308 25.9953 26.6835 26.2705 27.9392 26.8087C29.1948 27.3468 30.3271 28.1365 31.2658 29.1291M12.2988 23.0881C13.7895 21.4895 15.5919 20.2134 17.5949 19.3383C19.5979 18.4632 21.7587 18.0078 23.9445 18.0001C26.1302 17.9925 28.2942 18.4328 30.3033 19.2939C32.3123 20.1549 34.124 21.4185 35.6258 23.0066M6.44727 17.6321C8.6833 15.2342 11.3869 13.32 14.3914 12.0073C17.3958 10.6947 20.6376 10.0116 23.9162 10.0001C27.1948 9.9887 30.4409 10.6492 33.4544 11.9408C36.4679 13.2324 39.1846 15.1278 41.4373 17.51M24 38C22.8954 38 22 37.1046 22 36C22 34.8955 22.8954 34 24 34C25.1046 34 26 34.8955 26 36C26 37.1046 25.1046 38 24 38Z"
                    stroke="#E0B973" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p class="text-sm font-semibold">Free<br />WIFI Service</p>
            </div>
          </div>
        </div>
      </section>

      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-12 text-blue-900">
          Tất cả các loại phòng của chúng tôi đều miễn phí các dịch vụ bao gồm bữa sáng
        </h2>

        <!-- Phòng Sang trọng -->
        <div class="flex flex-col md:flex-row items-center mb-16">
          <div class="md:w-1/2 p-4 text-left">
            <h3 class="text-3xl font-bold text-blue-900 mb-4 relative pl-6">
              <span class="absolute left-0 top-0 h-full w-1 bg-yellow-500"></span>
              Sang Trọng
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Phòng của chúng tôi được thiết kế để cho bạn cảm giác thoải mái nhất.
              Hãy quên đi cuộc sống thường ngày và tìm chúng tôi cho bạn 1 không gian riêng tư dành riêng cho bạn.
            </p>
            <button class="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
              Khám phá
            </button>
          </div>
          <div class="md:w-1/2 p-4">
            <img src="/images/room.jpg" alt="Phòng sang trọng" class="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <!-- Phòng Tiện nghi -->
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 p-4 text-left">
            <h3 class="text-3xl font-bold text-blue-900 mb-4 relative pl-6">
              <span class="absolute left-0 top-0 h-full w-1 bg-yellow-500"></span>
              Tiện nghi
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Tọa lạc tại vị trí thuận tiện, khách sạn chúng tôi mang đến cho quý khách không gian nghỉ dưỡng hiện đại
              với đầy đủ tiện nghi cao cấp.
              Từ hệ thống phòng nghỉ sang trọng, dịch vụ lễ tân 24/7, nhà hàng ẩm thực phong phú đến phòng gym, spa và
              hồ bơi,
              tất cả đều được thiết kế nhằm mang lại trải nghiệm thoải mái và tiện lợi nhất cho mọi du khách.
            </p>
            <button class="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
              Khám phá
            </button>
          </div>
          <div class="md:w-1/2 p-4">
            <img src="/images/beach.jpg" alt="Bãi biển tiện nghi"
              class="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>

    <!-- Slogan -->
    <section class="py-10 text-center">
      <p class="text-2xl italic text-blue-900 mb-2">
        "Như trở về nhà, dù bạn ở bất cứ đâu."
      </p>
      <p class="text-base text-gray-700">Team dev mang tới sự trang trọng</p>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <div>
    <!-- Header -->
    <Header class="relative z-20" />

    <!-- Banner with Overlay and Overlap Effect -->
    <section class="relative">
      <img src="assets/images/banner.jpg" alt="Banner" class="w-full h-[500px] object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div> <!-- Overlay -->
      <div class="absolute inset-0 flex items-center justify-center text-center text-white z-20 -mt-20">
        <div>
          <h1 class="text-5xl font-bold mb-4">WELCOME TO TEAM DEV HOTELS</h1>
          <p class="text-lg">Đạt chuẩn khách sạn 5 sao đẳng cấp với không gian nghỉ dưỡng tuyệt vời</p>
        </div>
      </div>
    </section>

    <!-- Body Content -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">
          Tất cả các loại hình cơ bản để phục vụ bạn bao gồm bếp ăn, spa, gym
        </h2>

        <!-- Room Section -->
        <div class="flex flex-col md:flex-row items-center mb-12">
          <div class="md:w-1/2 p-4">
            <h3 class="text-2xl font-semibold text-blue-600 mb-4">SANG TRỌNG</h3>
            <p class="text-gray-700">
              Tất cả các loại 16+ dịch vụ khách sạn bao gồm bar, phòng ngủ, nhà hàng, hồ bơi... 
              Chúng tôi luôn sẵn sàng phục vụ bạn.
            </p>
            <a href="#" class="inline-block mt-4 text-yellow-500 hover:underline">Xem chi tiết</a>
          </div>
          <div class="md:w-1/2 p-4">
            <img src="assets/images/room.jpg" alt="Room" class="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>

        <!-- Facilities Section -->
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 p-4">
            <h3 class="text-2xl font-semibold text-blue-600 mb-4">TIỆN NGHI</h3>
            <p class="text-gray-700">
              Tận hưởng không gian nghỉ dưỡng đẳng cấp với bãi biển riêng, spa thư giãn, gym hiện đại, 
              hồ bơi vô cực và nhiều tiện ích khác.
            </p>
            <a href="#" class="inline-block mt-4 text-yellow-500 hover:underline">Xem chi tiết</a>
          </div>
          <div class="md:w-1/2 p-4">
            <img src="assets/images/beach.jpg" alt="Beach" class="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Slogan -->
    <section class="py-8 text-center">
      <p class="text-2xl italic text-gray-700">
        "Nghỉ tuyệt vời, dịch vụ bạn cần là đây" <br />
        Team dev mong 10 sao trên trang trong
      </p>
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
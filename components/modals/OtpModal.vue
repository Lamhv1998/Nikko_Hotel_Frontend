<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg w-96 relative">
      <h2 class="text-xl font-bold mb-4">Nhập mã OTP</h2>

      <div class="flex justify-between gap-2 mb-4">
        <input
          v-for="(digit, index) in otp"
          :key="index"
          type="text"
          maxlength="1"
          class="w-12 h-12 border border-gray-300 text-center text-lg rounded"
          v-model="otp[index]"
          @input="focusNext(index, $event)"
        />
      </div>

      <div class="text-center text-sm text-gray-500 mb-4">
        Gửi lại mã sau: <span>{{ countdown }}</span>
      </div>

      <div class="flex justify-end space-x-2">
        <button
          class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          @click="emit('close')"
        >
          Hủy
        </button>
        <button
          class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          @click="handleSubmit"
        >
          Xác nhận
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: 'submit', code: string): void;
  (e: 'close'): void;
}>();

const otp = ref(['', '', '', '']);
const countdown = ref('0:59');
let timeLeft = 59;

const startTimer = () => {
  timeLeft = 59;
  countdown.value = '0:59';
  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdown.value = 'Gửi lại';
    } else {
      timeLeft--;
      countdown.value = `0:${String(timeLeft).padStart(2, '0')}`;
    }
  }, 1000);
};

// Tự chạy lại timer mỗi khi mở modal
watch(() => props.visible, (newVal) => {
  if (newVal) {
    otp.value = ['', '', '', ''];
    startTimer();
  }
});

function focusNext(index: number, e: Event) {
  const input = e.target as HTMLInputElement;
  if (input.value && index < otp.value.length - 1) {
    const next = (e.target as HTMLInputElement).nextElementSibling as HTMLInputElement;
    next?.focus();
  }
}

function handleSubmit() {
  const enteredCode = otp.value.join('');
  if (enteredCode.length !== 4 || enteredCode.includes('')) {
    alert('Vui lòng nhập đủ 4 số OTP');
    return;
  }
  emit('submit', enteredCode);
}
</script>

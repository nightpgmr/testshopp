<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppInput from '@/components/ui/AppInput.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { useToastStore } from '@/stores/toast'

const email = ref('')
const loading = ref(false)
const sent = ref(false)
const toast = useToastStore()

async function handleSubmit() {
  if (!email.value) {
    toast.show('لطفاً ایمیل خود را وارد کنید', 'error')
    return
  }
  loading.value = true
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  sent.value = true
  toast.show('لینک بازیابی رمز ارسال شد (دمو)', 'success')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 space-y-6">
    <div class="text-center space-y-2">
      <div class="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">🔑</div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">بازیابی رمز عبور</h2>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        {{ sent ? 'ایمیل بازیابی ارسال شد. صندوق ورودی خود را بررسی کنید.' : 'ایمیل خود را وارد کنید تا لینک بازیابی ارسال شود' }}
      </p>
    </div>

    <form v-if="!sent" class="space-y-4" @submit.prevent="handleSubmit">
      <AppInput v-model="email" label="ایمیل" type="email" placeholder="example@email.com" required />
      <AppButton type="submit" block :loading="loading">ارسال لینک بازیابی</AppButton>
    </form>

    <div v-else class="text-center space-y-4">
      <AppButton block @click="sent = false">ارسال مجدد</AppButton>
    </div>

    <p class="text-center text-sm text-gray-500">
      <RouterLink to="/auth/login" class="text-primary font-medium hover:underline">← بازگشت به ورود</RouterLink>
    </p>
  </div>
</template>

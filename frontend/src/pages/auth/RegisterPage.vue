<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppInput from '@/components/ui/AppInput.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { useToastStore } from '@/stores/toast'

const form = ref({ name: '', email: '', phone: '', password: '', password_confirmation: '' })
const loading = ref(false)
const toast = useToastStore()

async function handleRegister() {
  const { name, email, password, password_confirmation } = form.value
  if (!name || !email || !password) {
    toast.show('لطفاً فیلدهای الزامی را پر کنید', 'error')
    return
  }
  if (password !== password_confirmation) {
    toast.show('رمز عبور و تکرار آن یکسان نیست', 'error')
    return
  }
  loading.value = true
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  toast.show('ثبت‌نام موفق! ایمیل تأیید ارسال شد (دمو)', 'success')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 space-y-6">
    <div class="text-center space-y-2">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">ایجاد حساب کاربری</h2>
      <p class="text-gray-500 dark:text-gray-400 text-sm">به خانواده TestShopp بپیوندید</p>
    </div>

    <form class="space-y-4" @submit.prevent="handleRegister">
      <AppInput v-model="form.name" label="نام و نام خانوادگی" placeholder="علی محمدی" required />
      <AppInput v-model="form.email" label="ایمیل" type="email" placeholder="example@email.com" required />
      <AppInput v-model="form.phone" label="شماره موبایل" type="tel" placeholder="09121234567" />
      <AppInput v-model="form.password" label="رمز عبور" type="password" placeholder="حداقل ۸ کاراکتر" required />
      <AppInput v-model="form.password_confirmation" label="تکرار رمز عبور" type="password" placeholder="••••••••" required />

      <label class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
        <input type="checkbox" required class="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
        <span>با <a href="#" class="text-primary hover:underline">قوانین و مقررات</a> موافقم</span>
      </label>

      <AppButton type="submit" block :loading="loading">ثبت‌نام</AppButton>
    </form>

    <p class="text-center text-sm text-gray-500">
      قبلاً ثبت‌نام کرده‌اید؟
      <RouterLink to="/auth/login" class="text-primary font-medium hover:underline">وارد شوید</RouterLink>
    </p>
  </div>
</template>

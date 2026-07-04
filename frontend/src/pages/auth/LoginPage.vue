<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppInput from '@/components/ui/AppInput.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { useToastStore } from '@/stores/toast'

const email = ref('')
const password = ref('')
const loading = ref(false)
const toast = useToastStore()

async function handleLogin() {
  if (!email.value || !password.value) {
    toast.show('لطفاً تمام فیلدها را پر کنید', 'error')
    return
  }
  loading.value = true
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  toast.show('ورود موفق! (دمو استاتیک)', 'success')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 space-y-6">
    <div class="text-center space-y-2">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">ورود به حساب</h2>
      <p class="text-gray-500 dark:text-gray-400 text-sm">خوش آمدید! اطلاعات خود را وارد کنید</p>
    </div>

    <form class="space-y-4" @submit.prevent="handleLogin">
      <AppInput v-model="email" label="ایمیل" type="email" placeholder="example@email.com" required />
      <AppInput v-model="password" label="رمز عبور" type="password" placeholder="••••••••" required />

      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
          <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
          مرا به خاطر بسپار
        </label>
        <RouterLink to="/auth/forgot-password" class="text-primary hover:underline">
          فراموشی رمز عبور
        </RouterLink>
      </div>

      <AppButton type="submit" block :loading="loading">ورود</AppButton>
    </form>

    <p class="text-center text-sm text-gray-500">
      حساب کاربری ندارید؟
      <RouterLink to="/auth/register" class="text-primary font-medium hover:underline">ثبت‌نام کنید</RouterLink>
    </p>

    <div class="relative">
      <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-200 dark:border-gray-700" /></div>
      <div class="relative flex justify-center text-sm"><span class="px-4 bg-white dark:bg-gray-900 text-gray-500">یا</span></div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <AppButton variant="outline" size="sm">Google</AppButton>
      <AppButton variant="outline" size="sm">GitHub</AppButton>
    </div>
  </div>
</template>

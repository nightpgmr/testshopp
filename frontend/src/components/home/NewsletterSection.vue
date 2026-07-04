<script setup lang="ts">
import { ref } from 'vue'
import { useToastStore } from '@/stores/toast'
import AppButton from '@/components/ui/AppButton.vue'

const email = ref('')
const toast = useToastStore()

function subscribe() {
  if (!email.value) return
  toast.show('عضویت در خبرنامه با موفقیت انجام شد', 'success')
  email.value = ''
}
</script>

<template>
  <section class="py-14 md:py-20">
    <div class="container mx-auto px-4">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-slate-900 via-slate-800 to-primary p-10 md:p-16 text-center text-white">
        <div class="relative z-10 max-w-lg mx-auto space-y-5">
          <p class="text-blue-300 text-sm font-semibold tracking-wide">خبرنامه</p>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">از تخفیف‌ها باخبر شوید</h2>
          <p class="text-slate-300 text-sm md:text-base">جدیدترین محصولات و پیشنهادهای ویژه را در ایمیل خود دریافت کنید</p>
          <form class="flex flex-col sm:flex-row gap-3 pt-2" @submit.prevent="subscribe">
            <input
              v-model="email"
              type="email"
              placeholder="ایمیل شما"
              class="flex-1 h-12 px-5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm"
            />
            <AppButton type="submit" class="!bg-white !text-slate-900 shrink-0 h-12 px-8">
              عضویت
            </AppButton>
          </form>
        </div>
        <div class="absolute -top-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div class="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  </section>
</template>

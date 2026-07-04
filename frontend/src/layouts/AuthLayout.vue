<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex bg-gray-50 dark:bg-gray-950">
    <!-- Decorative side -->
    <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-bl from-primary to-blue-700 items-center justify-center p-12">
      <div class="relative z-10 text-white max-w-md space-y-6">
        <div class="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl font-bold">T</div>
        <h1 class="text-4xl font-bold leading-tight">به TestShopp خوش آمدید</h1>
        <p class="text-white/80 text-lg leading-relaxed">
          فروشگاه آنلاین مدرن با Laravel 12 و Vue.js 3. تجربه خرید سریع، امن و لذت‌بخش.
        </p>
      </div>
      <div class="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Form side -->
    <div class="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
      <RouterLink to="/" class="lg:hidden flex items-center gap-2 mb-8">
        <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold">T</div>
        <span class="text-2xl font-bold">TestShopp</span>
      </RouterLink>
      <div class="w-full max-w-md">
        <RouterView />
      </div>
      <RouterLink to="/" class="mt-8 text-sm text-gray-500 hover:text-primary transition-colors">
        ← بازگشت به فروشگاه
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from '@/data/demo'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="categories" class="py-14 md:py-20">
    <div class="container mx-auto px-4">
      <SectionHeader title="دسته‌بندی‌ها" subtitle="محصولات را بر اساس نیاز خود پیدا کنید" />

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        <a
          v-for="cat in categories"
          :key="cat.id"
          href="#"
          class="group flex flex-col items-center p-5 rounded-2xl surface-card card-hover"
        >
          <div class="w-[72px] h-[72px] rounded-2xl overflow-hidden mb-3 bg-gradient-to-br from-slate-900 to-slate-800 p-2 shadow-inner">
            <img
              :src="cat.image"
              :alt="cat.name"
              loading="lazy"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span class="font-semibold text-slate-900 dark:text-white text-sm">{{ cat.name }}</span>
          <span class="text-xs text-slate-400 mt-1">{{ cat.productCount }} محصول</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSlider from '@/components/home/HeroSlider.vue'
import CategoryGrid from '@/components/home/CategoryGrid.vue'
import ProductSection from '@/components/home/ProductSection.vue'
import BrandStrip from '@/components/home/BrandStrip.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import {
  featuredProducts,
  newArrivals,
  bestSellers,
  discountedProducts,
} from '@/data/demo'
</script>

<template>
  <div>
    <div class="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div class="container mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <AppIcon name="shield" :size="14" class="text-primary" />
        <span>نسخه نمایشی — فاز ۱: معماری، دیتابیس و احراز هویت</span>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 md:py-10">
      <HeroSlider />
    </div>

    <CategoryGrid />

    <ProductSection
      id="products"
      title="محصولات ویژه"
      subtitle="منتخب تیم TestShopp برای شما"
      :products="featuredProducts"
    />

    <ProductSection
      id="new-arrivals"
      title="جدیدترین‌ها"
      subtitle="تازه‌ترین محصولات فروشگاه"
      :products="newArrivals"
    />

    <ProductSection
      id="best-sellers"
      title="پرفروش‌ترین‌ها"
      subtitle="محبوب‌ترین انتخاب مشتریان"
      :products="bestSellers"
    />

    <ProductSection
      id="discounts"
      title="تخفیف‌های ویژه"
      subtitle="فرصت را از دست ندهید"
      :products="discountedProducts"
    />

    <BrandStrip />
    <NewsletterSection />
  </div>
</template>

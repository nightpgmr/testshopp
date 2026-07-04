<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import { navItems, quickLinks, storeInfo, navLink } from '@/data/navigation'
import AppIcon from '@/components/ui/AppIcon.vue'

const theme = useThemeStore()
const cart = useCartStore()
const wishlist = useWishlistStore()
const route = useRoute()
const mobileOpen = ref(false)
const searchQuery = ref('')

function closeMobile() {
  mobileOpen.value = false
}

function isActive(item: (typeof navItems)[0]) {
  if (item.hash) return route.path === '/' && route.hash === item.hash
  return route.path === '/' && !route.hash
}
</script>

<template>
  <div class="hidden md:block border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/80 dark:bg-slate-950/80">
    <div class="container mx-auto px-4 h-9 flex items-center justify-center gap-8 text-xs text-slate-500 dark:text-slate-400">
      <a :href="`tel:${storeInfo.phone}`" class="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
        <AppIcon name="phone" :size="14" />
        {{ storeInfo.phone }}
      </a>
      <span class="inline-flex items-center gap-1.5">
        <AppIcon name="truck" :size="14" />
        {{ storeInfo.shipping }}
      </span>
    </div>
  </div>

  <header class="sticky top-0 z-50 glass">
    <div class="container mx-auto px-4">
      <div class="relative flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center gap-2.5 shrink-0 z-10 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
            T
          </div>
          <span class="text-lg font-bold text-slate-900 dark:text-white hidden sm:block tracking-tight">TestShopp</span>
        </RouterLink>

        <nav class="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-0.5">
          <RouterLink
            v-for="item in navItems"
            :key="item.label"
            :to="navLink(item)"
            class="px-4 py-2 text-sm font-medium rounded-full transition-all"
            :class="isActive(item)
              ? 'text-primary bg-primary/10'
              : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="flex items-center gap-1 z-10">
          <button class="icon-btn hidden md:flex" :title="theme.isDark ? 'حالت روشن' : 'حالت تاریک'" @click="theme.toggle()">
            <AppIcon :name="theme.isDark ? 'sun' : 'moon'" :size="18" />
          </button>

          <button class="icon-btn relative" title="علاقه‌مندی‌ها">
            <AppIcon name="heart" :size="18" />
            <span v-if="wishlist.count" class="absolute top-1 left-1 min-w-[16px] h-4 px-1 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {{ wishlist.count }}
            </span>
          </button>

          <button class="icon-btn relative" title="سبد خرید">
            <AppIcon name="cart" :size="18" />
            <span v-if="cart.count" class="absolute top-1 left-1 min-w-[16px] h-4 px-1 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {{ cart.count }}
            </span>
          </button>

          <RouterLink
            to="/auth/login"
            class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <AppIcon name="user" :size="16" />
            ورود
          </RouterLink>

          <button class="icon-btn lg:hidden" aria-label="منو" @click="mobileOpen = !mobileOpen">
            <AppIcon :name="mobileOpen ? 'close' : 'menu'" :size="20" />
          </button>
        </div>
      </div>

      <div class="hidden md:flex justify-center pb-4">
        <div class="relative w-full max-w-lg">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="جستجوی محصول، برند یا دسته‌بندی..."
            class="w-full h-11 px-5 pr-12 rounded-full surface-card text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <AppIcon name="search" :size="18" />
          </span>
        </div>
      </div>

      <Transition name="menu">
        <div v-if="mobileOpen" class="lg:hidden pb-5 border-t border-slate-200/60 dark:border-slate-800/60 pt-4 space-y-4">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="جستجو..."
            class="w-full h-11 px-4 rounded-full surface-card text-sm md:hidden focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <nav class="flex flex-wrap justify-center gap-2">
            <RouterLink
              v-for="item in navItems"
              :key="item.label"
              :to="navLink(item)"
              class="px-4 py-2 text-sm font-medium rounded-full transition-colors"
              :class="isActive(item) ? 'bg-primary text-white' : 'surface-card text-slate-700 dark:text-slate-300'"
              @click="closeMobile"
            >
              {{ item.label }}
            </RouterLink>
          </nav>

          <div class="flex flex-wrap justify-center gap-2">
            <RouterLink
              v-for="item in quickLinks"
              :key="item.label"
              :to="navLink(item)"
              class="px-3 py-1.5 text-xs rounded-full text-slate-500 border border-slate-200 dark:border-slate-700 hover:text-primary hover:border-primary/30 transition-colors"
              @click="closeMobile"
            >
              {{ item.label }}
            </RouterLink>
          </div>

          <div class="flex items-center justify-center gap-6 text-xs text-slate-500 pt-2">
            <a :href="`tel:${storeInfo.phone}`" class="hover:text-primary">{{ storeInfo.phone }}</a>
            <RouterLink to="/auth/register" class="text-primary font-semibold" @click="closeMobile">ثبت‌نام</RouterLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: all 0.2s ease; }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-6px); }
</style>

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useToastStore } from './toast'

export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref<number[]>([])

  const count = computed(() => items.value.length)

  function toggle(productId: number) {
    const idx = items.value.indexOf(productId)
    const toast = useToastStore()
    if (idx >= 0) {
      items.value.splice(idx, 1)
      toast.show('از علاقه‌مندی‌ها حذف شد', 'info')
    } else {
      items.value.push(productId)
      toast.show('به علاقه‌مندی‌ها اضافه شد', 'success')
    }
  }

  function has(productId: number) {
    return items.value.includes(productId)
  }

  return { items, count, toggle, has }
})

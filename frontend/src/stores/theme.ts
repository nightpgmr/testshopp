import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  const preferredDark = usePreferredDark()

  function init() {
    const saved = localStorage.getItem('theme')
    isDark.value = saved ? saved === 'dark' : preferredDark.value
    apply()
  }

  function toggle() {
    isDark.value = !isDark.value
    apply()
  }

  function apply() {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  watch(isDark, apply)

  return { isDark, init, toggle }
})

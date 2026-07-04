<template>
  <footer id="contact" class="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm mt-auto">
    <div class="container mx-auto px-4 py-14 md:py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm">T</div>
            <span class="text-lg font-bold text-slate-900 dark:text-white tracking-tight">TestShopp</span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            فروشگاه آنلاین پریمیوم با تجربه خرید سریع و امن. ساخته شده با Laravel 12 و Vue.js 3.
          </p>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">دسترسی سریع</h4>
          <ul class="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" class="hover:text-primary transition-colors">درباره ما</a></li>
            <li><a href="#contact" class="hover:text-primary transition-colors">تماس با ما</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">سوالات متداول</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">قوانین و مقررات</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">حساب کاربری</h4>
          <ul class="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="/auth/login" class="hover:text-primary transition-colors">ورود</a></li>
            <li><a href="/auth/register" class="hover:text-primary transition-colors">ثبت‌نام</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">سفارش‌های من</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">علاقه‌مندی‌ها</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">تماس</h4>
          <ul class="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>info@testshopp.ir</li>
            <li>تهران، خیابان ولیعصر</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© ۱۴۰۴ TestShopp — تمامی حقوق محفوظ است.</p>
        <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">نسخه دمو · فاز ۱</span>
      </div>
    </div>
  </footer>
</template>

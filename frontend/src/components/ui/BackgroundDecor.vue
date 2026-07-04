<template>
  <div class="pointer-events-none fixed inset-0 overflow-hidden -z-10" aria-hidden="true">
    <div class="bg-blob bg-blob-1" />
    <div class="bg-blob bg-blob-2" />
    <div class="bg-blob bg-blob-3" />
    <div class="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50/40 dark:from-slate-950/50 dark:via-transparent dark:to-slate-950/30" />
  </div>
</template>

<style scoped>
.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.28;
  animation: float 24s ease-in-out infinite;
}

.dark .bg-blob {
  opacity: 0.14;
}

.bg-blob-1 {
  width: 500px;
  height: 500px;
  top: -150px;
  right: -100px;
  background: radial-gradient(circle, #0071e3 0%, transparent 65%);
}

.bg-blob-2 {
  width: 400px;
  height: 400px;
  top: 40%;
  left: -120px;
  background: radial-gradient(circle, #3b82f6 0%, transparent 65%);
  animation-delay: -8s;
}

.bg-blob-3 {
  width: 350px;
  height: 350px;
  bottom: 10%;
  right: 15%;
  background: radial-gradient(circle, #0ea5e9 0%, transparent 65%);
  animation-delay: -16s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(15px, -20px); }
}
</style>

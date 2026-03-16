<template>
  <div class="app">
    <header class="brand">
      <div class="logo">☼</div>
      <div class="titles">
        <h1>Sunnee Kids</h1>
        <span class="subtitle">Configuratore Bottiglia</span>
      </div>
    </header>
    <main class="layout">
      <section class="left">
        <router-view />
      </section>
      <section class="right">
        <BottlePreview />
      </section>
    </main>
  </div>
</template>

<script setup>
import BottlePreview from './components/BottlePreview.vue'
</script>

<style>
:root { --bg: #0f172a; --panel: #0b1224; --glass: rgba(255,255,255,0.06); --text: #e5e7eb; --muted: #9ca3af; --brand: #1e6f8a; --accent: #ffd166; }
* { box-sizing: border-box; }
body { margin: 0; background: radial-gradient(1200px 600px at 20% -10%, #11324a 0%, #0f172a 50%, #0b1224 100%); color: var(--text); font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
.app { min-height: 100vh; display: grid; grid-template-rows: auto 1fr; backdrop-filter: saturate(1.1); }
.brand { display: flex; align-items: center; gap: 14px; padding: 18px 28px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.logo { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 12px; background: linear-gradient(135deg, #ffd166 0%, #ffb703 100%); color: #0f172a; font-size: 20px; font-weight: 700; }
.titles { display: grid; }
.brand h1 { margin: 0; font-size: 22px; letter-spacing: 0.3px; color: #eaf6fb; }
.brand .subtitle { color: var(--muted); font-size: 13px; }
.layout { display: grid; grid-template-columns: 1fr 440px; gap: 28px; padding: 28px; }
.left { padding-right: 0; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 22px; backdrop-filter: blur(6px); }
.right { background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 22px; box-shadow: 0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05); }
@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  .right { order: -1; }
}
</style>

<template>
  <div class="wrap">
    <div class="hero">
      <div class="badge">Novità</div>
      <h2>Benvenuto nel Configuratore Sunnee Kids</h2>
      <p>Scegli i colori della tua bottiglia in tre step. Con il primo ordine, ricevi una bottiglia termica personalizzabile.</p>
    </div>
    <div class="actions">
      <router-link class="btn primary" to="/step/tappo">Inizia</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrap { display: grid; gap: 18px; }
.hero { display: grid; gap: 8px; padding: 18px; border-radius: 16px; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)); border: 1px solid rgba(255,255,255,0.08); }
.badge { width: fit-content; padding: 4px 10px; border-radius: 999px; background: rgba(255,255,255,0.1); color: #e5e7eb; font-size: 12px; letter-spacing: .3px; border: 1px solid rgba(255,255,255,0.12); }
h2 { margin: 0; font-size: 26px; color: #eaf6fb; letter-spacing: .2px; }
p { margin: 0; color: #9ca3af; line-height: 1.6; }
.actions { display: flex; gap: 12px; margin-top: 6px; }
.btn { padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); color: #e5e7eb; text-decoration: none; background: rgba(255,255,255,0.06); }
.btn.primary { background: linear-gradient(135deg, #1e6f8a, #2aa1c0); color: #eaf6fb; border-color: transparent; }
.btn.primary:active { transform: translateY(1px); }
</style>

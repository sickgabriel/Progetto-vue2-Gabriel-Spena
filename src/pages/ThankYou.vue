<template>
  <div class="wrap">
    <div class="panel">
      <h2>Grazie!</h2>
      <p>Configurazione salvata. Ecco il riepilogo colori:</p>
    </div>
    <div class="summary">
      <div class="row">
        <span class="label">Tappo</span>
        <span class="swatch" :style="{ background: store.summary.value.tappo }"></span>
      </div>
      <div class="row">
        <span class="label">Corpo</span>
        <span class="swatch" :style="{ background: store.summary.value.corpo }"></span>
      </div>
      <div class="row">
        <span class="label">Fondo</span>
        <span class="swatch" :style="{ background: store.summary.value.fondo }"></span>
      </div>
    </div>
    <div class="actions">
      <router-link class="btn primary" to="/">Nuova configurazione</router-link>
    </div>
  </div>
</template>

<script setup>
import store from '../store'
</script>

<style scoped>
.wrap { display: grid; gap: 16px; }
.panel { display: grid; gap: 6px; padding: 16px; border-radius: 16px; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)); border: 1px solid rgba(255,255,255,0.08); }
h2 { margin: 0; font-size: 22px; color: #eaf6fb; }
p { margin: 0; color: #9ca3af; }
.summary { display: grid; gap: 10px; }
.row { display: flex; align-items: center; gap: 12px; }
.label { min-width: 60px; color: #cbd5e1; }
.swatch { width: 32px; height: 32px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.25); }
.actions { margin-top: 10px; }
.btn { padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); color: #e5e7eb; text-decoration: none; background: rgba(255,255,255,0.06); }
.btn.primary { background: linear-gradient(135deg, #1e6f8a, #2aa1c0); border-color: transparent; color: #eaf6fb; }
</style>

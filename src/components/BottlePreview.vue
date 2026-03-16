<template>
  <div class="preview">
    <div class="canvas">
      <svg viewBox="0 0 160 320" class="bottle">
        <defs>
          <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
            <stop offset="100%" stop-color="rgba(0,0,0,0.15)"/>
          </linearGradient>
        </defs>
        <g class="b">
          <rect x="60" y="16" width="40" height="36" rx="8" :style="{ fill: store.state.selections.tappo }" />
          <rect x="68" y="6" width="24" height="10" rx="4" :style="{ fill: store.state.selections.tappo }" />
          <rect x="44" y="52" width="72" height="190" rx="28" :style="{ fill: store.state.selections.corpo }" />
          <rect x="44" y="230" width="72" height="34" rx="10" :style="{ fill: store.state.selections.fondo }" />
          <path d="M50 60 c0 -20 60 -20 60 0" fill="url(#shade)" opacity=".35"/>
          <ellipse cx="80" cy="276" rx="50" ry="10" fill="rgba(0,0,0,0.25)"/>
          <circle cx="88" cy="150" r="22" fill="#fff" opacity="0.10" />
        </g>
      </svg>
    </div>
    <div class="legend">
      <div class="chip">
        <span class="dot" :style="{ background: store.state.selections.tappo }"></span>
        Tappo
      </div>
      <div class="chip">
        <span class="dot" :style="{ background: store.state.selections.corpo }"></span>
        Corpo
      </div>
      <div class="chip">
        <span class="dot" :style="{ background: store.state.selections.fondo }"></span>
        Fondo
      </div>
    </div>
  </div>
</template>

<script setup>
import store from '../store'
</script>

<style scoped>
.preview { display: grid; gap: 16px; }
.canvas { display: grid; place-items: center; padding: 8px; }
.bottle { width: 100%; max-width: 320px; height: auto; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.35)); transition: transform .2s ease; }
.preview:hover .bottle { transform: translateY(-4px); }
.legend { display: flex; gap: 10px; flex-wrap: wrap; }
.chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 10px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; font-size: 13px; color: #e5e7eb; }
.dot { width: 14px; height: 14px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.3); }
</style>

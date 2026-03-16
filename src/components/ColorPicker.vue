<template>
  <div class="color-picker">
    <h3>{{ label }}</h3>
    <div class="grid">
      <button
        v-for="c in palette"
        :key="c.value"
        class="swatch"
        :title="c.name || c.value"
        :style="{ background: c.value, boxShadow: modelValue === c.value ? '0 0 0 3px rgba(255,255,255,0.8), 0 6px 18px rgba(0,0,0,0.25)' : '0 2px 10px rgba(0,0,0,0.15)'}"
        @click="$emit('update:modelValue', c.value)"
        :aria-pressed="modelValue === c.value"
      >
        <span class="ring" :style="{ borderColor: modelValue === c.value ? '#e5e7eb' : 'transparent' }"></span>
      </button>
    </div>
  </div>
  </template>

<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  palette: { type: Array, default: () => [] }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.color-picker { display: grid; gap: 12px; }
.color-picker h3 { margin: 0; font-size: 14px; color: #cbd5e1; letter-spacing: .2px; text-transform: uppercase; }
.grid { display: grid; grid-template-columns: repeat(5, 56px); gap: 12px; }
.swatch {
  position: relative; width: 56px; height: 56px; border-radius: 16px;
  border: none; cursor: pointer; transition: transform .15s ease, box-shadow .2s ease;
}
.swatch:hover { transform: translateY(-2px); }
.ring { position: absolute; inset: 6px; border: 3px solid transparent; border-radius: 12px; pointer-events: none; }
.swatch[aria-pressed="true"] { transform: translateY(-1px) scale(1.02); }
</style>

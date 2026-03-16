<template>
  <div class="wrap">
    <div class="stepper">
      <router-link :to="'/step/tappo'" class="step" :class="{ active: part==='tappo', done: index>0 }"><span>1</span><em>Tappo</em></router-link>
      <div class="bar"></div>
      <router-link :to="'/step/corpo'" class="step" :class="{ active: part==='corpo', done: index>1 }"><span>2</span><em>Corpo</em></router-link>
      <div class="bar"></div>
      <router-link :to="'/step/fondo'" class="step" :class="{ active: part==='fondo', done: index>2 }"><span>3</span><em>Fondo</em></router-link>
    </div>
    <h2>Personalizza {{ title }}</h2>
    <p>Scegli un colore per il {{ title.toLowerCase() }}.</p>
    <ColorPicker :label="'Colore ' + title" v-model="color" :palette="store.state.palette"/>
    <div class="actions">
      <button class="btn ghost" @click="goBack" v-if="index > 0">Indietro</button>
      <button class="btn primary" @click="goNext">{{ isLast ? 'Invia' : 'Avanti' }}</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ColorPicker from '../components/ColorPicker.vue'
import store from '../store'

const props = defineProps({ part: { type: String, required: true } })
const router = useRouter()

const parts = ['tappo', 'corpo', 'fondo']
const index = computed(() => parts.indexOf(props.part))
const title = computed(() => props.part.charAt(0).toUpperCase() + props.part.slice(1))
const isLast = computed(() => index.value === parts.length - 1)

const color = computed({
  get: () => store.state.selections[props.part],
  set: v => store.setColor(props.part, v)
})

function goNext() {
  if (isLast.value) {
    router.push('/thank-you')
  } else {
    router.push('/step/' + parts[index.value + 1])
  }
}
function goBack() {
  router.push('/step/' + parts[index.value - 1])
}
</script>

<style scoped>
.wrap { display: grid; gap: 18px; }
.stepper { display: grid; grid-template-columns: 1fr 40px 1fr 40px 1fr; align-items: center; gap: 8px; }
.bar { height: 2px; background: rgba(255,255,255,0.15); }
.step { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: #cbd5e1; }
.step span { width: 32px; height: 32px; border-radius: 10px; display: grid; place-items: center; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); font-weight: 600; }
.step em { font-style: normal; font-size: 14px; }
.step.active span { background: linear-gradient(135deg, #1e6f8a, #2aa1c0); color: #eaf6fb; border-color: transparent; }
.step.done span { background: rgba(255,255,255,0.2); }
h2 { margin: 0; font-size: 22px; color: #e5e7eb; letter-spacing: .2px; }
p { margin: 0; color: #9ca3af; }
.actions { position: sticky; bottom: 0; display: flex; gap: 12px; margin-top: 6px; padding-top: 12px; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.12)); }
.btn { padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); color: #e5e7eb; cursor: pointer; transition: transform .1s ease, background .2s ease; }
.btn:hover { background: rgba(255,255,255,0.1); }
.btn.primary { background: linear-gradient(135deg, #1e6f8a, #2aa1c0); border-color: transparent; color: #eaf6fb; }
.btn.ghost { background: transparent; }
.btn:active { transform: translateY(1px); }
</style>

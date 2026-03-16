import { reactive, computed } from 'vue'

const palette = [
  { name: 'Seafoam', value: '#77c5d9' },
  { name: 'Ocean', value: '#1e6f8a' },
  { name: 'Corallo', value: '#ff6f61' },
  { name: 'Sabbia', value: '#d7b899' },
  { name: 'Sole', value: '#ffd166' },
  { name: 'Laguna', value: '#3bb273' },
  { name: 'Conchiglia', value: '#f5e6cc' },
  { name: 'Cielo', value: '#a3d5ff' },
  { name: 'Drift', value: '#718096' },
  { name: 'Perla', value: '#f7f9fc' }
]

const state = reactive({
  selections: {
    tappo: '#1e6f8a',
    corpo: '#f7f9fc',
    fondo: '#3bb273'
  },
  palette
})

const summary = computed(() => ({
  ...state.selections
}))

export default {
  state,
  setColor(part, color) {
    state.selections[part] = color
  },
  summary
}

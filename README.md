# Sunnee Kids – Configuratore Bottiglia (Vue 3)

Configuratore interattivo per personalizzare una bottiglia termica in tre step (Tappo, Corpo, Fondo), pensato per il lancio della linea "Kids" del brand Sunnee, che trasforma la plastica marina in costumi. Interfaccia moderna, pulita e kid‑friendly, anteprima real‑time tramite SVG.

## Caratteristiche
- Navigazione a step (Welcome → Tappo → Corpo → Fondo → Thank You) con Vue Router
- Palette brand di 10 colori marini/pastello/naturali
- Anteprima in tempo reale con SVG colorabile via `fill`
- UI moderna: stepper, pannelli “glassy”, pulsanti brand con gradienti
- Architettura semplice: max 5–6 componenti, Composition API, store reattivo minimale

## Stack
- Vue 3 (Composition API)
- Vue Router 4
- Vite 5

## Requisiti
- Node.js >= 18

## Avvio rapido
```bash
npm install
npm run dev
# apri http://localhost:5173/
```

Build di produzione:
```bash
npm run build
npm run preview
```

## Struttura
```
src/
  components/
    BottlePreview.vue   # SVG con 3 parti colorabili
    ColorPicker.vue     # Selettore colori riutilizzabile (v-model)
  pages/
    Welcome.vue         # Intro e call-to-action
    Step.vue            # Step Tappo/Corpo/Fondo (prop: part)
    ThankYou.vue        # Riepilogo scelte
  App.vue               # Layout con preview a destra
  main.js               # Bootstrap app
  router.js             # Definizione route
  store.js              # Stato reattivo (palette + selections)
```

## Palette brand (10)
- Seafoam `#77c5d9`
- Ocean `#1e6f8a`
- Corallo `#ff6f61`
- Sabbia `#d7b899`
- Sole `#ffd166`
- Laguna `#3bb273`
- Conchiglia `#f5e6cc`
- Cielo `#a3d5ff`
- Drift `#718096`
- Perla `#f7f9fc`

## Personalizzazione
- Modifica i colori in `src/store.js` (array `palette`)
- Regola lo stile globale in `src/App.vue` (variabili CSS e gradienti)
- Cambia la logica degli step editando `src/pages/Step.vue`

## Accessibilità
- Swatch con focus/hover evidenti e area clic ampia
- Contrasti adeguati su fondo scuro

## Note brand
- Il progetto simula la promo “bottiglia termica personalizzabile con il primo ordine” della linea Sunnee Kids.

## Licenza
Distribuito per scopi dimostrativi/educativi. Adatta la licenza secondo le esigenze del brand.


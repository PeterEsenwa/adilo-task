import { defineConfig, presetAttributify, presetUno, } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons({
      prefix: 'icon-',
      collections: {
        svgSpinners: () => import('@iconify-json/svg-spinners/icons.json').then((m) => m.default),
        googleMaterialIcons: () => import('@iconify-json/ic/icons.json').then((m) => m.default),
        // Use Tabler Icons
        tablerIcons: () => import('@iconify-json/tabler/icons.json').then((m) => m.default)
      }
    })
  ],
  transformers: [
    transformerDirectives()
  ]
})

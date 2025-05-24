import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(),
      del({
        targets: ['out/src/server'],
        hook: 'buildStart'
      }),
      copy({
        targets: [
          {
            src: 'src/server',
            dest: 'out/src' // ou 'build' selon ta structure (vérifie le dossier de sortie réel)
          }
        ],
        hook: 'writeBundle'
      })
    ],
    resolve: {
      alias: {
        '@/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/assets/**',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@/hooks': resolve('src/renderer/src/hooks'),
        '@/assets': resolve('src/renderer/src/assets'),
        '@/store': resolve('src/renderer/src/store'),
        '@/components': resolve('src/renderer/src/components'),
        '@/mocks': resolve('src/renderer/src/mocks')
      }
    },
    plugins: [react()]
  }
})

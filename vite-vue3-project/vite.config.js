import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import eslintPlugin from 'vite-plugin-eslint'

const variableLessPath = path.resolve(__dirname, 'src/style/variable.less')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  css:{
    postcss:{
      plugins:[
        autoprefixer({
          overrideBrowserslist: ['Chrome > 44', 'ie 11']
        }),
        pxtorem({
          rootValue: 37.5,
          unitPrecision: 10,
          // propList: ['line-height', 'letter-spacing'],
          selectorBlackList: ['v'],
          replace: true,
          mediaQuery: true,
          minPixelValue: 1,
          exclude: /node_modules/i
      }),
      ]
    },
    preprocessorOptions:{
      less:{
        additionalData: `@import "${variableLessPath}";`
      }
    }
  }
})

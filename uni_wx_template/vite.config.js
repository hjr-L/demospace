import { defineConfig, loadEnv } from 'vite'
import path from 'path';
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  const env = loadEnv(mode, process.cwd() )
  return {
    resolve:{
      alias:[
        {
          find: '@',
          replacement: path.resolve(__dirname,'./src')
        }
      ]
    },
    server:{
      proxy:{
        '/apis':{
          target: 'XXXXX',
          rewrite: (path)=>path.replace(/^\/apis/,''),
          changeOrigin: true
        }
      }
    },
    plugins: [
      uni(),
    ],
  }
})

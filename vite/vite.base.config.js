import { defineConfig } from 'vite';
import theme from './theme/common.js'
import { resolve } from 'path';
// import legacyPlugin from '@vitejs/plugin-legacy';
import {createHtmlPlugin} from 'vite-plugin-html';
import postcssPresetEnv from 'postcss-preset-env';
import viteCompression from 'vite-plugin-compression';
import viteImageMain from 'vite-plugin-imagemin'

export default defineConfig({
    css: {
        modules: {
            // 配置生成的css key的格式（非自定义的key）
            // localsConvention: (originalClassName,generatedClassName,inputFile)=>{
            //     return generatedClassName.replace(/-/g, '_');
            // }
            localsConvention: 'camelCaseOnly',
            scopeBehaviour: 'local', //local 开启模块化， global关闭
            globalModulePaths: [/!(less|css)/], //不想参与到编译的文件夹，正则数组。
            generateScopedName: "[name]_[local]_[hash]", //生成css key的命名
            hashPrefix: 'hello',//参与到hash
        },
        preprocessorOptions: {
            less: {
                math: 'always',
                globalVars: {
                    // primaryColor: "blue"
                    ...theme
                }
            },
            sass: {

            }
            //...
        },
        // devSourcemap: false, //开启css的sourcemap
        postcss: {
            plugins: [
                postcssPresetEnv
            ]
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split("/")[0].toString();
                    }

                }
            }
        },
        terserOptions: {
            compress: {
                // 移除 console debugger
                drop_console: true,
                drop_debugger: true
            }
        },
        external: ['vue'],
        plugins: [
            // externalGlobals({
            //     vue: 'Vue'
            // }),
            
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        title: process.env.VITE_APP_TITLE
                    }
                }
            }),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz'
            }),
            viteImageMain({
                gifsicle:{
                    optimizationLevel: 3,
                    interlaced: false
                },
                optipng:{
                    optimizationLevel: 3
                },
                mozjpeg:{
                    quality: 20
                }
            })
        ]
        // legacyPlugin({
        //     targets: ['chrome 52', 'Android > 39', 'iOS >= 10.3', 'iOS >= 10.3'],
        //     additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        // }),
    },
    resolve: {
        alias: [
            {
                find: '@assets',
                replacement: resolve(__dirname, './assets'),
                // customResolver: ()=>{}
            }
        ]
    }

})
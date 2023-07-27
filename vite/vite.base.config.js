import {defineConfig} from 'vite';
import theme from './theme/common.js'

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
                    globalVars:{
                        // primaryColor: "blue"
                        ...theme
                    }
                },
                sass: {

                }
                //...
            },
            devSourcemap: false,
            postcss:{
                plugins:[
                    
                ]
            }
        },
        
})
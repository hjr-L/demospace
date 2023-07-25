import { defineConfig, loadEnv } from "vite";

import viteBaseConfig from "./vite.base.config";

import viteDevConfig from "./vite.dev.config";

import viteProdConfig from "./vite.prod.config";


const configResolve = {
  build: () => Object.assign({}, viteBaseConfig, viteProdConfig),
  serve: () => Object.assign({}, viteBaseConfig, viteDevConfig),
};

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, './' )
    console.log(env);
  return configResolve[command]();
});

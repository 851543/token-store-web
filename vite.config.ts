import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        // 1. 配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: 'sass' })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
          @use "@/styles/sky/_mixins.scss" as *;
          @use "@/styles/sky/_variables.scss" as *;
        `,
        api: 'modern-compiler', // or 'modern'
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 代理-解决跨域问题
  server: {
    open: true, // 自动弹出浏览器
    port: 5173, // web启动端口
    proxy: {
      '/api': {
        // 获取数据的服务器地址设置
        target: 'http://localhost:8080',
        // 需要代理跨域
        changeOrigin: true,
        // 路径重写
        rewrite: (path: any) => {
          return path.replace(new RegExp('^/api'), '')
        }
      }
    }
  }
})

/// <reference types="vite/client" />
// Vue 组件类型声明
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

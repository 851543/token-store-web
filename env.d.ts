/// <reference types="vite/client" />
// Vue 组件类型声明
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
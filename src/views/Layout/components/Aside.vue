<script setup>
import SidebarItem from './SidebarItem.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

//路由信息
const routes = ref([])

// 获取路由信息
const getRoutes = () => {
  const routes = JSON.parse(JSON.stringify([...router.options.routes]))
  const menu = routes.find((item) => item.path === '/')
  if (menu) {
    return menu.children
  }
}
onMounted(async () => {
  routes.value = await getRoutes()
})

const isCollapse = ref(false)
</script>
<template>
  <div>
    <div class="logo">
      <div v-if="!isCollapse" class="sidebar-logo">
        <img src="@/assets/login/logo.png" style="width: 120px; height: 31px" />
      </div>
      <div v-else class="sidebar-logo-mini">
        <img src="@/assets/login/mini-logo.png" />
      </div>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu>
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  text-align: center;
  background-color: #ffc100;
  padding: 15px 0 0;
  height: 60px;
  img {
    display: inline-block;
  }
}
.sidebar-logo-mini {
  img {
    width: 30px;
    height: 30px;
  }
}
.el-scrollbar {
  height: 100%;
  background-color: rgb(52, 55, 68);
}

.el-menu {
  border: none;
  height: calc(95vh - 23px);
  width: 100% !important;
  padding: 47px 15px 0;
}
</style>

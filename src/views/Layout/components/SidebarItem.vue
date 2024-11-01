<script setup>
import SidebarItemLink from './SidebarItemLink.vue'
const props = defineProps({
  item: {
    type: Array,
    required: true
  },
  isCollapse: {
    type: Boolean,
    default: false
  },
  isFirstLevel: {
    type: Boolean,
    default: true
  },
  basePath: {
    type: String,
    default: ''
  }
})
console.log(props.item)
</script>
<template>
  <div>
    <div
      v-if="!item.meta || !item.meta.hidden"
      :class="['menu-wrapper', 'full-mode', { 'first-level': isFirstLevel }]"
    >
      <template>
        <sidebar-item-link>
          <el-menu-item :class="{ 'submenu-title-noDropdown': isFirstLevel }">
            <i class="iconfont" />
            <template v-slot:title> </template>
          </el-menu-item>
        </sidebar-item-link>
      </template>
      <el-sub-menu popper-append-to-body>
        <template v-slot:title>
          <i v-if="item.meta && item.meta.icon" class="iconfont" :class="item.meta.icon" />
          <slot v-if="item.meta && item.meta.title" name="title">{{ item.meta.title }}</slot>
        </template>
        <template v-if="item.children">
          <sidebar-item
            v-for="child in item.children"
            :key="child.path"
            :item="child"
            :is-collapse="isCollapse"
            class="nest-menu"
          />
        </template>
      </el-sub-menu>
    </div>
  </div>
</template>

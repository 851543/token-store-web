import { loginAPI } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * 用户数据状态管理器
 */
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    const getUserInfo = async (data: Object) => {
      const reslut = await loginAPI(data)
      userInfo.value = reslut
    }

    const delUserInfo = () => {
      userInfo.value = {}
    }

    return {
      userInfo,
      getUserInfo,
      delUserInfo
    }
  },
  // 参数持久化
  {
    persist: true
  }
)

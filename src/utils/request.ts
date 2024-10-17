import { useUserStore } from '@/stores/user'
import axios from 'axios'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

/**
 * 创建axios实例
 */
const request = axios.create({
  //基础路径
  baseURL: 'http://localhost:5173/api/admin/', // VITE基础路径
  timeout: 5000 //超时的时间
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  // 请求成功
  (request) => {
    const userStore = useUserStore()
    const token = (userStore.userInfo as { token: any }).token
    // 校验token是否存在
    if (token) {
      request.headers.Authorization = token
    }
    return request
  },
  // 请求失败
  (e) => Promise.reject(e)
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  // 响应成功
  (response) => response.data,
  // 响应失败
  (e) => {
    //http状态码
    const status = e.response.status
    const msg = e.response.data.msg
    const userStore = useUserStore()
    const router = useRouter()
    switch (status) {
      case 401:
        ElMessage.error('token令牌过期')
        userStore.delUserInfo()
        router.push({ path: '/login' })
        break
      default:
        ElMessage.error(msg)
        break
    }
    return Promise.reject(e)
  }
)

export default request

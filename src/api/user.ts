import request from '@/utils/request'

/**
 * 登陆
 * @param data
 * @returns
 */
export const loginAPI = (data: Object) => request.post('/employee/login', data)

const INFO_KEY = 'staff_manage_info'

// 获取个人信息
export const getInfo = () => {
  const defaultObj = null
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
// 设置个人信息
export const setInfo = (token) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(token))
}
// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

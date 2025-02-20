import { getInfo, setInfo, removeInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      userToken: getInfo()
    }
  },
  mutations: {
    setUserToken (state, token) {
      state.userToken = token
      setInfo(token)
    },
    removeToken (state) {
      state.userToken = null
      removeInfo()
    }
  },
  actions: {},
  getters: {}
}

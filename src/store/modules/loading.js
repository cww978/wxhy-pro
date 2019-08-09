import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {
    load: false
  },
  mutations: {
    SHOW_LOAD: state => {
      state.load = true
    },
    CLOSE_LOAD: state => {
      state.load = false
    }
  },
  actions: {
    showLoad: ({ commit }) => {
      commit('SHOW_LOAD')
      Toast.loading({
        duration: 0,
        mask: false,
        message: '加载中...'
      })
      console.log('load:', true)
    },
    closeLoad: ({ commit }) => {
      Toast.clear()
      commit('CLOSE_LOAD')
      console.log('load:', false)
    }
  }
}

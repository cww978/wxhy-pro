import { routerMaps } from '@/router/modules/meeting'
import { signIn, getSignInDetail } from '@/api/signInRecord'
import { userInfo } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 是否签到
    signIn: false,
    // 首页菜单
    menus: [],
    // 人物信息
    userInfo: {
      id: '',
      headImgUrl: '',
      nickname: ''
    },
    // 人物签到信息
    signinInfo: {
      id: '',
      meetingId: '',
      num: ''
    }
  },
  getters: {
    signIn: state => state.signIn,
    userHeadImgUrl: state => state.userInfo.headImgUrl,
    nickname: state => state.userInfo.nickname,
    signinInfo: state => state.signinInfo,
    menus: state => state.menus
  },
  mutations: {
    // 设置用户信息
    SET_USERINFO: (state, info) => {
      Object.assign(state.userInfo, info)
    },
    // 设置签到信息
    SET_SIGNININFO: (state, info) => {
      Object.assign(state.signinInfo, info)
    },
    SET_SIGNIN: (state, e) => {
      state.signin = e
    },
    SET_MENUS: (state, menus) => {
      state.menus = [...menus]
    }
  },
  actions: {
    getMenus: ({ commit }) => {
      let menus = []
      for (let item of routerMaps) {
        if (item.meta.type === 'menu') {
          menus.push({
            title: item.meta.title,
            icon: item.meta.icon,
            path: item.path
          })
        }
      }
      commit('SET_MENUS', menus)
    },
    // 获取用户的ID、头像
    getUserInfo: ({ commit }) => {
      return new Promise(resolve => {
        userInfo().then(res => {
          commit('SET_USERINFO', res.data)
          resolve()
        })
      })
    },
    // 更新签到信息
    updateSignInInfo: ({ commit }, meetingId) => {
      getSignInDetail({ meetingId: meetingId }).then(res => {
        if (res.data) {
          commit('SET_SIGNININFO', res.data)
          commit('SET_SIGNIN', true)
        } else {
          commit('SET_SIGNIN', false)
        }
      })
    },
    // 签到
    signin: ({ dispatch }, params) => {
      return new Promise((resolve, error) => {
        signIn(params)
          .then(res => {
            if (res.data) {
              dispatch('updateSigninInfo', params.meetingId)
            }
            resolve(res)
          })
          .catch(() => {
            error()
          })
      })
    }
  }
}

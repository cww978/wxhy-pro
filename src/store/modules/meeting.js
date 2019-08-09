export default {
  namespaced: true,
  state: {
    meetingInfo: {
      meetingId: '', // 会议id
      meetingTitle: '',
      meetingContent: ''
    }
  },
  getters: {
    meetingId: state => state.meetingInfo.meetingId,
    meetingInfo: state => state.meetingInfo
  },
  mutations: {
    SET_MEETINGINFO: (state, info) => {
      Object.assign(state.meetingInfo, info)
    }
  },
  actions: {
    setMeetingInfo: ({ commit }, data) => {
      commit('SET_MEETINGINFO', data)
    }
  }
}

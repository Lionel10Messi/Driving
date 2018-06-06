import * as types from '../types'
let wxApi = require('../../assets/js/wxApi')

const state = {
  wxIsLogin: false,
  wxUserInfo: {}
}

const getters = {
  wxIsLogin: () => {
    return state.wxIsLogin
  },
  wxUserInfo: () => {
    return state.wxUserInfo
  }
}

const actions = {
  // 登陆
  wxLogin: ({commit, dispatch}, playload) => {
    let wxLogin = wxApi.wxLogin()
    wxLogin().then(res => {
      commit(types.WXLOGIN, true)
      console.log(res)
    })
    .catch(reason => {
      commit(types.WXLOGIN, false)
      console.log('reason' + reason)
    })
    .finally(res => {
      console.log(res)
    })
  }
}

const mutations = {
  [types.WXLOGIN] (state, palyload) {
    state.wxIsLogin = palyload
    // wx.clearStorage()
    wxApi.wxSetStorage('wxIsLogin', palyload)
    console.log(wxApi.wxGetStorage('wxIsLogin'))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

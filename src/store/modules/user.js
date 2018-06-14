import * as types from '../types'
let wxApi = require('../../assets/js/wxApi')
let wxRequest = require('../../assets/js/wxRequest')

const state = {
  wxIsLogin: false,
  wxUserInfo: {},
  wxSystemInfo: {},
  appOptions: {},
  ifGetUserInfo: false,
  ifGetUserLocation: false
}

const getters = {
  wxIsLogin: () => {
    return state.wxIsLogin
  },
  wxUserInfo: () => {
    return state.wxUserInfo
  },
  wxSystemInfo: () => {
    return state.wxSystemInfo
  }
}

const actions = {
  // 登陆
  wxLogin: ({commit, dispatch}, playload) => {
    let wxLogin = wxApi.wxLogin()
    let wxGetSetting = wxApi.wxGetSetting()
    let wxGetUserInfo = wxApi.wxGetUserInfo()
    wxLogin().then(res => {
      if(res.code){
        commit(types.WXLOGIN, true)
        wxGetSetting().then(res => {
          if(res.authSetting['scope.userInfo']){
            wxGetUserInfo().then(res => {
              commit(types.WXGETWXUSERINFO, res.userInfo)
              /*
              wxRequest.postRequest('/user/login', {
                accountName : 'admin',
                password: '"rxLjFDVI7VudNBIjaO2AL+XaZ+Wy3oDwM8OT61qvtdxKGmFebXk6SdRcnI0ItH3av7u7D5CWMIVEi3/sxp6pjIvuTcxX581YRsQRqapJ6q9uu0YxhN0vePoYi0u/MAvyDxlK/lZ73Ee/Gwo8qm0vub/P8ZBzTWDsIANH1PQ/q9Q="'
              }).then(res => {
                console.log(res.data)
              })
              */
            })
          } else {

          }
        })
      }
    })
    .catch(reason => {
      commit(types.WXLOGIN, false)
    })
  }
}

const mutations = {
  [types.WXLOGIN] (state, playload) {
    state.wxIsLogin = playload
  },
  [types.WXGETWXUSERINFO] (state, playload) {
    state.wxUserInfo = playload
    console.log(state)
  },
  [types.WXGETWXUSERLOCATION] (state, playload) {
    state.ifGetUserLocation = playload
  },
  [types.WXGETWXSYSTEMINFO] (state, playload) {
    state.wxSystemInfo = playload
  },
  [types.WXAPPOPTIONS] (state, playload) {
    state.appOptions = playload
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

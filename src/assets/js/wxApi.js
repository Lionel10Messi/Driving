var Promise = require('promise')

function wxPromisify (fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res)
      }
      obj.fail = function (res) {
        // 失败
        reject(res)
      }
      fn(obj)
    })
  }
}

// 无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  )
}
/**
 * 微信用户登录,获取code
 */
function wxLogin () {
  return wxPromisify(wx.login)
}
/**
 * 获取微信用户信息
 * 注意:须在登录之后调用
 */
function wxGetUserInfo () {
  return wxPromisify(wx.getUserInfo)
}
/**
 * 获取微信用户绑定的手机号
 * 注意:须在登录之后调用
 */
function wxGetPhoneNumber () {
  return wxPromisify(wx.getPhoneNumber)
}
/**
 * 获取系统信息
 */
function wxGetSystemInfo () {
  return wxPromisify(wx.getSystemInfo)
}

/**
 * 数据缓存
 */
// 异步存储
function wxSetStorage (key, data) {
  let wxSetStorage = wxPromisify(wx.setStorage)
  return wxSetStorage({
    key: key,
    data: data
  })
}

// 同步存储
function wxSetStorageSync (key, data) {
  let wxSetStorageSync = wxPromisify(wx.setStorageSync)
  return wxSetStorageSync({
    key: key,
    data: data
  })
}

module.exports = {
  wxPromisify: wxPromisify,
  wxLogin: wxLogin,
  wxGetUserInfo: wxGetUserInfo,
  wxGetSystemInfo: wxGetSystemInfo,
  wxGetPhoneNumber: wxGetPhoneNumber,
  wxSetStorage: wxSetStorage,
  wxSetStorageSync: wxSetStorageSync
}

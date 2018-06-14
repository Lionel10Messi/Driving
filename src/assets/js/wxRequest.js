var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
let config = require('./config')

/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest (url, data) {
  return fly.get(config.default.origin + config.default.preHash + url, data)
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest (url, data) {
  return fly.post(config.default.origin + config.default.preHash + url, data)
}

module.exports = {
  postRequest: postRequest,
  getRequest: getRequest
}

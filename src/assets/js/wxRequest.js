var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
let config = require('./config')
let origin = config.default.isDebug ? config.default.devOrigin : config.default.prodOrigin,
    url = origin + config.default.preHash

/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest (httpUrl, data) {
  return fly.get(url + httpUrl, data)
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest (httpUrl, data) {
  return fly.post(url + httpUrl, data)
}

module.exports = {
  postRequest: postRequest,
  getRequest: getRequest
}

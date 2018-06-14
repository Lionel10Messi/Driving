var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
let config = require('./config')
let utils = require('./utils')
let origin = config.isDebug ? config.devOrigin : config.prodOrigin,
    url = origin + config.preHash

function checkStatus(response){
  setTimeout(()=>{
    utils.hideLoading()
  }, 250)
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if(response.data.resultCode == '0'){
      return response.data.result
    } else {
      utils.showToasts(response.data.result, 'error');
      if(response.data.resultCode == '15030003'){
        setTimeout(function(){
          window.location.href = "/";
        },1000);
      }
    }
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    // 异常状态下，把错误信息返回去
    if(response != undefined && response.status != undefined){
      utils.showToasts("请求失败"+response.status, 'error');
      return
    }
  }
}

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
  utils.showLoading()
  return fly.post(url + httpUrl, data).then((response) => {
    return checkStatus(response)
  })
}

module.exports = {
  postRequest: postRequest,
  getRequest: getRequest
}

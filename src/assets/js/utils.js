import store from "../../store"
module.exports = {

  formatNumber:function  (n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  },

  formatTime: function  (date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
  },

//判断是否为空
  isEmpty: function (obj) {
    function isEmptyObject(e) {
      var t;
      for (t in e)
        return !1;
      return !0
    }

    if (obj == '' || obj == null) {
      return true
    }
    if (!isNaN(obj)) {
      return false
    }
    if (obj == undefined || isEmptyObject(obj)) {
      return true
    }
    return obj.length == 0;
  },
  //比较两个对象的属性值是否一样
  isObjectValueEqual: function (a, b, props) {
    function isArray(o) {
      return Object.prototype.toString.call(o) == '[object Array]';
    }

    if (!isArray(props)) {
      return false
    }
    for (var i = 0; i < props.length; i++) {
      if (a[props[i]] != b[props[i]]) {
        return false
      }
    }
    return true;
  },
  showLoading () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
  },
  hideLoading() {
    wx.hideLoading()
  },
  showToasts: function(title, icon, mask) {
    wx.showToast({
      title: title,
      icon: icon || 'none',
      duration: 2000,
      mask: mask || false
    })
  },
  getFileMaxSize: function () {
    return 5 * 1024 * 1024;
  },
  getFileMaxSizeName: function () {
    return '5M';
  },
  showLog: function (msg) {
    var isShowLog = true;
    if (isShowLog) {
    }
  },
  error: function (msg, _this) {
    _this.$message.error(msg)
  },
  success: function (msg, _this) {
    _this.$message.success(msg)
  },
  getStorage: function (itemName) {
    localStorage.getItem(itemName);
  },
  setStorage: function (itemName, value) {
    localStorage.setItem(itemName, value);
  },
  each: function (object, callback) {
    var type = (function () {
      switch (object.constructor) {
        case Object:
          return 'Object';
          break;
        case Array:
          return 'Array';
          break;
        case NodeList:
          return 'NodeList';
          break;
        default:
          return 'null';
          break;
      }
    })();
    // 为数组或类数组时, 返回: index, value
    if (type === 'Array' || type === 'NodeList') {
      // 由于存在类数组NodeList, 所以不能直接调用every方法
      [].every.call(object, function (v, i) {
        return callback.call(v, i, v) === false ? false : true;
      });
    }
    // 为对象格式时,返回:key, value
    else if (type === 'Object') {
      for (var i in object) {
        if (callback.call(object[i], i, object[i]) === false) {
          break;
        }
      }
    }
  },
  isInteger: function (obj) {
    if (obj == 0) {
      return true;
    }
    var r = /^\+?[1-9][0-9]*$/;　　//正整数
    return new RegExp(r).test(obj)
  }
};

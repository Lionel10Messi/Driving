import utils from './utils'

function validateFunc(validateList) {
    //   验证对象
    var validator = new Validator();
    for (let obj of validateList) {
        validator.add(obj.name, obj.validateType, obj.errMsg)
    }
    var errorMsg = validator.start();
    return new Promise((resolve, reject) => {
        if(errorMsg == undefined){
            resolve(true)
        } else {
            utils.showToasts('x'+errorMsg, 'none')
            reject()
        }
    })
}

// 将验证的表单元素加进到一个数组中去
// 开启一一验证 strategies
function Validator() {//新建一个对象
    this.cache = [];
}

Validator.prototype={
    //rule 规则名：6？+
    add: function(dom,rule,errorMsg){
        var ary = rule.split(':');//shift头部  pop尾部
        this.cache.push(function() {
            var strategy = ary.shift();
            ary.unshift(dom);
            ary.push(errorMsg);
            // [value,params,errorMsg] strategy 参数顺序
            return strategies[strategy].apply(dom,ary)
        })
    },
    start: function() {
        for (var i = 0, validateFunc;validateFunc = this.cache[i++];){
            var msg = validateFunc();
            if(msg) {
                return msg;
            }
        }
    }
}

// 表单验证策略
const strategies = {
    isNonEmpty: function(value, errorMsg) {
        if (value.trim() === '') {
            return errorMsg
        }
    },
    minLength: function(value, len, errorMsg) {
        if (value.trim().length < len) {
            return errorMsg
        }
    },
    maxLength: function(value, len, errorMsg) {
        if (value.trim().length > len) {
            return errorMsg
        }
    },
    isMobilePhone: function(value, errorMsg) {
        if (!/1[3456789][0-9]{9}/.test(value)) {
            return  errorMsg
        }
    },
    isEmail: function() {}
}

module.exports = {

    validator: validateFunc,

    //校验数字
    checkNum: function (value) {
        var reg = /^\d+$/;
        return reg.test(value);
    },
    //校验电话
    checkTel: function (value) {
        var reg = /^[0-9-]+/;
        return reg.test(value);
    },
    //校验手机号
    checkMobile: function (value) {
        var reg = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/;
        return reg.test(value);
    },
    //校验金额
    checkPrice: function (value) {
        var reg = /^(\d{1,10}(\.\d{0,2})?)$/;
        return reg.test(value);
    },
    //校验验证码
    checkSmsCode: function (value) {
        var reg = /^\d{4}$/;
        return reg.test(value);
    },
    //校验密码
    checkPassword: function (value) {
        var reg = /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,20}/;
        return reg.test(value);
    },
    //校验楼层号
    checkFloorCode: function (value) {
        var reg = /^[0-9a-zA-Z]{1,4}$/;
        return reg.test(value);
    },
    //校验身份证
    checkIdCard: function (value) {
        var exg = /^(\d{17}[0-9X]{1})$/;
        return exg.test(value);
    },
    //校验房间名
    checkRoomNo: function (value) {
        var reg = /^[0-9a-zA-Z]{1,6}$/;
        return reg.test(value);
    },
    //校验房间名
    checkApartmentCode: function (value) {
        var reg = /^[0-9a-zA-Z]{1,15}$/;
        return reg.test(value);
    }
};

import utils from './utils'

function validateFunc(validateList) {
    //   验证对象
    var validator = new Validator();
    for (let obj of validateList) {
        validator.add(obj.value, obj.validateType, obj.errMsg)
    }
    var errorMsg = validator.start();
    return new Promise((resolve, reject) => {
        if(errorMsg == undefined){
            resolve(true)
        } else {
            utils.showToasts(errorMsg, 'none')
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
        rule = rule || 'isNotEmpty'
        var ary = rule.split(':');//shift头部  pop尾部
        this.cache.push(function() {
            var strategy = ary.shift();
            ary.unshift(dom);
            ary.push(errorMsg);
            return strategies[strategy].apply(dom,ary)
        })
    },
    start: function() {
        for (let obj of this.cache) {
            let msg = obj();
            if(msg) {
                return msg;
            }
        }
    }
}

// 表单验证策略
const strategies = {
    isNotEmpty: function(value, errorMsg) {
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
    validator: validateFunc
};

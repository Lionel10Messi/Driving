String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
};
/**
 * Created by gaopeng on 16/1/13.
 */

var limitNumber = {
    read: function (val) {
        return val;
    },
    write: function (val, oldVal, min, max) {
        var number = parseInt(val);
        number = isNaN(number) ? min : number;
        number = number < min ? min : number;
        number = number > max ? max : number;
        return number;
    }
};


exports.limitNumber = limitNumber;

module.exports = {
    /**
     * 限制输入框只能输入金额
     * @param input
     */
    inputPrice: function (input) {
        // input.keyup(function (event) {
        //     if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
        //         return;
        //     }
        //     var reg = $(this).val().match(/\d{1,8}\.?\d{0,2}/);
        //     var txt = '';
        //     if (reg != null) {
        //         txt = reg[0];
        //     }
        //     if ($(this).val() != txt) {
        //       $(this).addClass("input-err")
        //     }else {
        //       $(this).removeClass("input-err")
        //     }
        //
        //     // $(this).val(txt);
        // }).change(function () {
        //     $(this).keypress();
        //     var v = $(this).val();
        //     if (/\.$/.test(v)) {
        //       $(this).addClass("input-err")
        //         // $(this).val(v.substr(0, v.length - 1));
        //     }else {
        //       $(this).removeClass("input-err")
        //     }
        // });
        //京东做法
        input.attr("maxlength", "13");
        input.keyup(function () {
            var v2 = this.value;
            // 只能输入纯数字和.，不能.开头，最多一个.
            var v2 = v2.replace(/[^.\d]+/g, '').replace(/^\./g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // 小数只能两位
            var reg = new RegExp("^([0-9]*[.][0-9]{2}).*$", "gmi");
            v2 = v2.replace(reg, "$1");

            if (this.value != v2 || this.value >= 10000000000) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    },
    //数字输入规则:纯数字,最长4位
    inputNumber: function (input) {
        input.attr("maxlength", "4");
        input.keyup(function () {
            var reg = $(this).val().match(/\d+/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            if ($(this).val() != txt) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    },
    //数字输入规则:纯数字,最长由参数maxlength决定
    inputNumberWithLength: function (input, maxlength) {
        input.attr("maxlength", maxlength);
        input.keyup(function () {
            var reg = $(this).val().match(/\d+/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            if ($(this).val() != txt) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    },
    //电话号码输入规则:数字+连接符-,最长14位
    inputTel: function (input) {
        input.attr("maxlength", "14");
        input.keyup(function () {
            var reg = $(this).val().match(/[0-9-]+/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            if ($(this).val() != txt) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    },
    //手机号输入规则:纯数字,最长11位
    inputMobile: function (input) {
        input.attr("maxlength", "11");
        input.keyup(function () {
            var reg = $(this).val().match(/\d+/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            if ($(this).val() != txt) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    },
    //身份证输入规则:数字和字母X,最长18位
    inputIdCard: function (input) {
        input.attr("maxlength", "18");
        input.keyup(function () {
            var reg = $(this).val().match(/[0-9X]+/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            if ($(this).val() != txt) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    },
    //房间号输入规则:最长20位
    inputRoomNo: function (input) {
        input.attr("maxlength", "20");
    },
    //房源号输入规则:字母+数字,最长15位
    inputApartmentCode: function (input) {
        input.attr("maxlength", "15");
        input.keyup(function () {
            var reg = $(this).val().match(/[0-9a-zA-Z]+/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            if ($(this).val() != txt) {
                $(this).addClass("input-err");
            } else {
                $(this).removeClass("input-err");
            }
        });
    }
};

/**
 * Created by shard on 16/7/15.
 */
module.exports = {
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

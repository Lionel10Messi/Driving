/**
 * Created by shard on 16/7/22.
 */
module.exports = {
    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    setCookie: function (cname, cvalue) {
      document.cookie = cname + "=" + cvalue;
    },
    clearCookie: function (cname) {
        var myDate = new Date();
        myDate.setTime(-1000);//设置过期时间
        document.cookie = cname + "=''; expires=" + myDate.toGMTString();
    }
};

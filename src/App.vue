<script>
  import utils from '@/assets/js/utils'
  export default {
    data () {
    return {
    }
  },
  onShow(e){
    console.log(e)
  },
  mounted(){
    this.$nextTick(function () {
      let appOptions = this.$root.$mp.appOptions;
      this.$store.commit('WXAPPOPTIONS', appOptions);
      this.getSystemInfo()
//      this.getUserInfo();
    })
  },
  methods:{
    getSystemInfo(){
      let that = this;
      wx.getSystemInfo({
        success(res){
          that.$store.commit('WXGETWXSYSTEMINFO',res)
        }
      })
    },
    getUserInfo(fn) {
      let that = this;
      wx.getSetting({
        success(res){
          if(res.authSetting['scope.userInfo'] == true){
            wx.getUserInfo({
              success(res){
                that.$store.commit('WXGETWXUSERINFO',res)
                fn && fn(true, res)
              },
              fail(){
                fn && fn(false)
              }
            })
          } else if(res.authSetting['scope.userInfo'] == false){
            wx.showModal({
              title: '授权请求',
              content: '请授权我们获取您的公开信息',
              complete(res){
                if(res.confirm){
                  wx.openSetting({
                    success (res) {
                      that.getUserInfo(fn);
                    },
                    fail() {
                      fn && fn(false);
                    }
                  })
                }
              }
            })
          } else {
            wx.authorize({
              scope: "scope.userInfo",
              success (res) {
                that.getUserInfo(fn);
              },
              fail() {
                fn && fn(false);
              }
            })
          }
        }
      })
    },
  },
  onShareAppMessage: function (res) {
    let that = this;
    return {
      title: '转发标题',
      path: '/pages/about/index',
      success (result) {
        utils.showToasts('分享成功', true)
      }
    }
  }
}
</script>

<style scoped>
  .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
</style>

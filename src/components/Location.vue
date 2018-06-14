<template>
  <view>
    <map
        id="myMap"
        style="width: 100%; height: 500rpx;"
        :latitude="latitude"
        :longitude="longitude"
        :markers="markers"
        :covers="covers"
        show-location
    ></map>
    <button v-if="ifGetUserLocation && canIUse" open-type="openSetting" @opensetting = 'opensetting'>打开授权设置页</button>
    <button @tap = 'checkSetting'>导航</button>
  </view>
</template>

<script>
  import utils from '@/assets/js/utils'
  export default {
    data () {
      return {
        canIUse: wx.canIUse('button.open-type.openSetting'),
        latitude: 31.2689900000,
        longitude: 121.5387500000,
        markers: [
          {
            id: 1,
            latitude: 31.2689900000,
            longitude: 121.5387500000,
            name: '明月坊'
          }
        ],
        covers: ''
      }
    },
    components: {
    },
    computed: {
      ifGetUserLocation () {
        return this.$store.state.User.ifGetUserLocation
      }
    },
    methods: {
      checkSetting () {
        let that = this;
        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.userLocation']) {
              wx.authorize({
                scope: 'scope.userLocation',
                success(res) {
                  that.$store.commit('WXGETWXUSERLOCATION', false);
                  that.getLocation()
                },
                fail(reason) {
                  that.$store.commit('WXGETWXUSERLOCATION', true)
                  that.openAlert()
                }
              })
            } else {
              that.$store.commit('WXGETWXUSERLOCATION', false)
              that.getLocation()
            }
          }
        })
      },
      getLocation () {
        wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
            latitude = 31.2689900000
            longitude = 121.5387500000
            wx.openLocation({
              latitude: latitude,
              longitude: longitude,
              name: '明月坊',
              address:'上海市杨浦区明月坊',
              scale: 15
            })
          }
        })
      },
      openAlert () {
        let that = this;
        wx.showModal({
          content: '您拒绝了位置授权,导致无法导航,请开启授权',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              if(!that.canIUse){
                wx.openSetting({
                  complete(res) {
                    let title = '授权失败', icon='error'
                    if(res.authSetting['scope.userLocation']){
                      title = '授权成功'
                      icon = 'success'
                    }
                    utils.showToasts(title, icon)
                  }
                })
              }
            }
          }
        });
      },
      opensetting(res){
        let title = '授权失败', icon='error'
        if(res.target.authSetting['scope.userLocation']){
          title = '授权成功'
          icon = 'success'
          this.$store.commit('WXGETWXUSERLOCATION', false);
        }
        utils.showToasts(title, icon)
      }
    },
    created () {
    },
    mounted () {
      this.$nextTick(function () {
        this.mapCtx = wx.createMapContext('myMap')
      })
    }
  }
</script>

<style>
</style>

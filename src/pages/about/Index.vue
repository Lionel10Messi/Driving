<template>
  <div class="page">
    <!--<button @getuserinfo="getUserInfo" open-type="getUserInfo">获取用户信息</button>-->
    <!--<button @getPhoneNumber="getPhoneNumber" open-type="getPhoneNumber">获取手机号信息</button>-->
    <!--<open-data type="userAvatarUrl"></open-data>-->
    <!--<open-data type="userNickName"></open-data>-->
    <button v-if="ifGetUserLocation && canIUse" open-type="openSetting" @opensetting = 'opensetting'>打开授权设置页</button>
    <Location></Location>
  </div>
</template>

<script>
  import Location from '@/components/Location.vue'
  export default {
    data () {
      return {
        canIUse: wx.canIUse('button.open-type.openSetting')
      }
    },
    computed: {
      ifGetUserLocation () {
        return this.$store.state.User.ifGetUserLocation
      }
    },
    components: {
      Location: Location
    },
    methods: {

    },
    created () {
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style scoped>

</style>

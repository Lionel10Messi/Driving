<template>
  <div class="container">
    <button @getuserinfo="getUserInfo" open-type="getUserInfo">获取用户信息</button>
    <open-data type="userAvatarUrl"></open-data>
    <open-data type="userNickName"></open-data>
  </div>
</template>

<script>
  import {mapActions} from 'Vuex'
//  import wxRequest from '../../assets/js/wxRequest'

  export default {
    data () {
      return {
      }
    },
    components: {
    },
    methods: {
      getUserInfo (e) {
        console.log(e.mp.detail.userInfo)
      }
    },
    created () {
//      wxRequest.postRequest('/user/login', {
//        'accountName': '18221636815',
//        'password': '0000'
//      }).then(res => {
//        console.log(res.data)
//      })
//      .catch(res => {
//        console.log(res)
//      })
//      .finally(res => {
//        console.log('dasdsa23')
//      })
      // 调用应用实例的方法获取全局数据
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style scoped>

</style>

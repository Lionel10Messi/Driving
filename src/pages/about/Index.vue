<template>
  <div class="page">
    <!--<button @getuserinfo="getUserInfo" open-type="getUserInfo">获取用户信息</button>-->
    <!--<button @getPhoneNumber="getPhoneNumber" open-type="getPhoneNumber">获取手机号信息</button>-->
    <!--<open-data type="userAvatarUrl"></open-data>-->
    <!--<open-data type="userNickName"></open-data>-->
    <Location></Location>
  </div>
</template>

<script>
  import Location from '@/components/Location.vue'
  export default {
    data () {
      return {
      }
    },
    computed: {
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

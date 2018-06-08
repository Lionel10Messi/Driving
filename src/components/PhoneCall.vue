<template>
  <view>
    <div class="weui-cells weui-cells_after-title">
      <div @tap="phoneCall" class="weui-cell">
        <div class="weui-cell__bd">{{phoneNumber}}</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        phoneNumber: '18842630226'
      }
    },
    components: {
    },
    methods: {
      phoneCall () {
        var that = this;
        wx.makePhoneCall({
          phoneNumber: that.phoneNumber
        })
      }
    },
    created () {
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style>
</style>

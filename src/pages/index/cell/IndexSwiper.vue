<template>
  <view>
    <swiper :indicatorDots="true"
            :autoplay="true"
            :interval="interval"
            :duration="duration"
            style="height: 300rpx">
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" style="width: 100%;height: 100%"/>
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        imgUrls: [
          '../../../static/images/banner.png',
          '../../../static/images/banner.png',
          '../../../static/images/banner.png'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000
      }
    },
    components: {
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

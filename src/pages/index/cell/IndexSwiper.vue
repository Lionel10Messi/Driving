<template>
  <view class="page__bd page__bd_spacing">
    <swiper :indicator-dots="true"
            :autoplay="true"
            :interval="interval"
            :duration="duration">
      <div v-for="item in imgUrls" :key="index">
        <swiper-item>
          <image :lazy-load="true" :src="item" class="slide-image">
          </image>
        </swiper-item>
      </div>
    </swiper>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        imgUrls: [
          '../../static/images/banner.png',
          '../../static/images/banner.png',
          '../../static/images/banner.png'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
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
  .slide-image {
    width: 100%;
    height: 100%;
  }
</style>

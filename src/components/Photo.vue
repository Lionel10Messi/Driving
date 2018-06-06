<template>
  <view>
    <view style="display: flex;flex-wrap: wrap;padding: 20rpx">
      <view :key="index" v-for="(item,index) in imgList" style="width:50%;height: 250rpx;">
        <image :lazy-load="true" :src="item.src" style="width: 100%;height: 180rpx">
        </image>
        <div>{{item.content}}</div>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        imgList: [{
          src: '../../static/images/index.png',
          content: '照片'
        },
        {
          src: '../../static/images/index.png',
          content: '照片'
        },
        {
          src: '../../static/images/index.png',
          content: '照片'
        },
        {
          src: '../../static/images/index.png',
          content: '照片'
        },
        {
          src: '../../static/images/index.png',
          content: '照片'
        },
        {
          src: '../../static/images/index.png',
          content: '照片'
        }]
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

<style>
</style>

<template>
  <view style="background-color: #999">
    <view class="articleContent">
      <view class="leftView">
        <view style="font-size: 50rpx">16</view>
        <view style="font-size: 30rpx">2018/05</view>
      </view>
      <view class="rightView">
        <div class="title">啦啦啦啦</div>
        <div style="font-size: 30rpx" class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
      </view>
    </view>
    <view class="articleContent">
      <view class="leftView">
        <view style="font-size: 50rpx">16</view>
        <view style="font-size: 30rpx">2018/05</view>
      </view>
      <view class="rightView">
        <div class="title">啦啦啦啦</div>
        <div style="font-size: 30rpx" class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
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
  .articleContent{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 1px;
    background-color: #fff;
    height: 200rpx;
    padding: 20rpx;
  }
  .leftView{
    width: 25%;
    margin-right: 3%;
    text-align: center;
    border-right:1px solid #999;
  }
  .rightView{
    width: 70%;
  }
  .title{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
  }
  .content{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }
</style>

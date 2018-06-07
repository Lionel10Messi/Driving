<template>
  <view>
    <view class="weui-flex">
      <view @click="goToPath(item.path)" class="weui-flex__item" style="height: 200rpx;" v-for="(item,index) in contentList" :key="index">
        <image :lazy-load="true" :src="item.contentImg" style="width: 100%;height: 100%">
        </image>
        <div style="text-align: center">{{item.content}}</div>
      </view>
    </view>
  </view>
</template>

<script>
  export default {

    data () {
      return {
        contentList: [{
          contentImg: '../../static/images/index.png',
          content: '首页',
          path: '/index/main'
        }, {
          contentImg: '../../static/images/photo.png',
          content: '照片',
          path: '/photo/main'
        }, {
          contentImg: '../../static/images/about.png',
          content: '关于',
          path: '/about/main'
        }, {
          contentImg: '../../static/images/contact.png',
          content: '联系',
          path: '/contact/main'
        }]
      }
    },
    components: {
    },
    methods: {
      goToPath (path) {
        this.$router.push({
          path: '/pages' + path,
          isTab: true
        })
      }
    },
    created () {
//      console.log(this.$router.currentRoute.path)
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style scoped>
  /*.content{*/
    /*display: flex;*/
    /*text-align: center;*/
    /*height: 300rpx;*/
  /*}*/
  /*.contentImg{*/
    /*width: 25%;*/
    /*height: 80%;*/
  /*}*/
</style>

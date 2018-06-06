<template>
  <view class="container">
    <scroll-view scroll-y enable-back-to-top scroll-with-animation>
      <IndexSwiper></IndexSwiper>
      <IndexSelectContent></IndexSelectContent>
      <Photo></Photo>
      <ArticleComponent></ArticleComponent>
    </scroll-view>
  </view>
</template>

<script>
  import {mapActions} from 'Vuex'
  import IndexSwiper from './cell/IndexSwiper.vue'
  import IndexSelectContent from './cell/IndexSelectContent.vue'
  import Photo from '@/components/Photo.vue'
  import ArticleComponent from '../../components/ArticleComponent.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      IndexSwiper: IndexSwiper,
      IndexSelectContent: IndexSelectContent,
      Photo: Photo,
      ArticleComponent: ArticleComponent
    },
    methods: {
//      ...mapActions(['wxLogin']),
      getUserInfo (e) {
        console.log(e.mp.detail.userInfo)
      }
    },
    created () {
//      this.wxLogin()
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

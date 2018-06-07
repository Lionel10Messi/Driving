<template>
  <view class="page">
    <scroll-view>
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
//      this.$store.dispatch('wxLogin')
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style scoped>

</style>

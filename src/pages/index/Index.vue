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
  import ArticleComponent from '@/components/ArticleComponent.vue'
  import {mixin} from '@/assets/js/mixin.js'

  export default {
    mixins: [mixin],
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
    },
    mounted () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style scoped>

</style>

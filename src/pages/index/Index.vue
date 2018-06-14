<template>
  <view class="page">
    <!--<scroll-view>-->
      <!--<IndexSwiper></IndexSwiper>-->
      <!--<IndexSelectContent></IndexSelectContent>-->
      <!--<Photo></Photo>-->
      <!--<ArticleComponent></ArticleComponent>-->
    <!--</scroll-view>-->
    <form ref="registerForm">
      <div class="field">
        请输入用户名：<input type="text" v-model="userName"/>
      </div>
      <div class="field">
        请输入用户名：<input type="text" v-model="passWord"/>
      </div>
      <button @tap="submit">提交</button>
    </form>
  </view>
</template>

<script>
  import {mapActions} from 'Vuex'
  import IndexSwiper from './cell/IndexSwiper.vue'
  import IndexSelectContent from './cell/IndexSelectContent.vue'
  import Photo from '@/components/Photo.vue'
  import ArticleComponent from '@/components/ArticleComponent.vue'
  import {mixin} from '@/assets/js/mixin.js'
  import {validator} from '@/assets/js/validate.js'
  export default {
    mixins: [mixin],
    data () {
      return {
        userName:'',
        passWord:''
      }
    },
    components: {
      IndexSwiper: IndexSwiper,
      IndexSelectContent: IndexSelectContent,
      Photo: Photo,
      ArticleComponent: ArticleComponent
    },
    methods: {
      submit(){
        let validateList = [{
          value: this.userName,
          errMsg: '用户名不能为空',
        },{
          value: this.passWord,
          errMsg: '密码不能为空',
        }]
        validator(validateList).then((res) => {
          console.log(res)
          if(res){
            console.log('验证成功')
          }
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
//        console.log(validator)
        wx.showNavigationBarLoading();
      })
    }
  }
</script>

<style scoped>

</style>

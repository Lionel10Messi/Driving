<script>
  import utils from '@/assets/js/utils'
  export default {
    data () {
    return {
    }
  },
  onShareAppMessage: function (res) {
    let that = this;
    return {
      title: '转发标题',
      path: '/pages/about/index',
      success (result) {
        utils.showToasts('分享成功', true)
      }
    }
  }
}
</script>

<style scoped>
  .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
</style>

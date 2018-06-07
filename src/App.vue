<script>
export default {
  data () {
    return {
      currentRoute: ''
    }
  },
  created () {
//    this.currentRoute = this.$router.currentRoute.path
  },
  watch: {
    '$router.currentRoute.path': {
      handler: function (newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
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

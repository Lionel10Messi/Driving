<template>
  <div class="container">
    <Photo></Photo>
  </div>
</template>

<script>
  import Photo from '../../components/photo'

  export default {
    data () {
      return {
      }
    },
    components: {
      Photo: Photo
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

</style>

<template>
  <div class="container">
    <Photo></Photo>
  </div>
</template>

<script>
  import Photo from '../../components/photo'
  import {mixin} from '@/assets/js/mixin.js'

  export default {
    mixins: [mixin],
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

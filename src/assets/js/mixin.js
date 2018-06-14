import { mapState } from 'vuex'

export const mixin = {
  computed: {

  },
  mounted() {
    let pages = getCurrentPages(),
    pageObj = {
      lastPage: '',
      currentPage: ''
    }
    if(pages.length == 1){
      pageObj.currentPage = pages[0].route
    } else {
      pageObj.lastPage = pages[0].route
      pageObj.currentPage = pages[1].route
    }
    this.$store.commit('PAGES', pageObj)
  }
}

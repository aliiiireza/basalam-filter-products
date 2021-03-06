import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

Vue.component('InfiniteLoading', InfiniteLoading)

Vue.use(InfiniteLoading, {
  slots: {
    noMore: ' ',
    noResults: '',
  },
})

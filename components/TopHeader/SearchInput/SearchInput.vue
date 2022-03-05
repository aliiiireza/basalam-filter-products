<template>
  <div class="search-input">
    <div class="search-input__field">
      <input v-model="keyword" placeholder="جست و جو" @keyup.enter="search" />
      <i class="ic-search" @click="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      keyword: '',
    }
  },
  watch: {
    '$route.query': {
      handler(query) {
        if (query.q) this.keyword = query.q
      },
    },
  },
  created() {},
  methods: {
    search() {
      this.$router.push({ name: 'index', query: { q: this.keyword } })
    },
  },
}
</script>
<style lang="scss">
@import './SearchInput';
</style>

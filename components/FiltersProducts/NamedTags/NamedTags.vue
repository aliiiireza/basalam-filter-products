<template>
  <div class="named-tags">
    <div v-if="loading" class="p-2">درحال بارگزاری...</div>
    <u-checkbox
      v-for="item in items"
      v-else
      :key="item.id"
      :value="selfValue.includes(item.id)"
      :label="item.title"
      @input="(checked) => toggleValue(item.id, checked)"
    />
  </div>
</template>

<script>
import modelMixin from '@/mixins/model'
import UCheckbox from '~/components/UiKit/UCheckbox/UCheckbox'
export default {
  name: 'NamedTags',
  components: {
    UCheckbox,
  },
  mixins: [modelMixin],
  props: {
    keyword: {
      type: String,
      default: 'سلام',
    },
  },
  data() {
    return {
      loading: false,
      items: [],
    }
  },
  watch: {
    keyword: {
      immediate: true,
      handler() {
        this.getNamedTags()
      },
    },
  },
  methods: {
    toggleValue(id, checked) {
      if (checked) this.selfValue.push(parseInt(id))
      else
        this.selfValue = this.selfValue.filter(
          (item) => parseInt(item) !== parseInt(id)
        )
    },
    getNamedTags() {
      const url = '/api/v3.0/ac?q=' + this.keyword
      this.items = []
      this.loading = true
      this.request(url, 'get')
        .then((response) => {
          this.items = response.data.response
            .filter((item) => item.key === 'categories')
            .map((item) => {
              const id = item.value.category_id
              const title = item.value.category
              const selected = this.selfValue.includes(id)
              return {
                id,
                title,
                selected,
              }
            })

          this.$emit('namedTags', this.items)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'NamedTags';
</style>

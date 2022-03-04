<template>
  <div class="named-tags">
    <u-checkbox
      v-for="(item, index) in items"
      :key="index"
      v-model="item.selected"
      :label="item.title"
    />
  </div>
</template>

<script>
import UCheckbox from '~/components/UiKit/UCheckbox/UCheckbox'
export default {
  name: 'NamedTags',
  components: {
    UCheckbox,
  },
  props: {
    keyword: {
      type: String,
      default: 'سلام',
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selfValue: this.value,
      items: [],
    }
  },
  watch: {
    items: {
      deep: true,
      handler() {
        const selectedItems = this.items
          .filter((item) => item.selected)
          .map((item) => item.id)

        this.$emit('input', selectedItems)
      },
    },
    keyword: {
      immediate: true,
      handler() {
        this.getNamedTags()
      },
    },
  },
  methods: {
    getNamedTags() {
      const url = '/api/v3.0/ac?q=%D8%B3%D9%84%D8%A7%D9%85'
      this.request(url, 'get').then((response) => {
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
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'NamedTags';
</style>

<template>
  <div class="filter-products">
    <div
      v-if="keyword !== ''"
      v-show="selectedFilters.length > 0"
      class="card mb-3"
    >
      <div class="card-header">فیلتر های اعمال شده</div>
      <div class="card-body selected-filters p-3">
        <div
          v-for="selectedFilter in selectedFilters"
          :key="selectedFilter.id"
          class="selected-filters__item"
        >
          {{ selectedFilter.title }}
          <i class="ic-close-circle" @click="removeSelectedFilter(selectedFilter)" />
        </div>
      </div>
    </div>

    <div v-if="keyword !== ''" v-show="namedTags.length > 0" class="card mb-3">
      <div class="card-header">جستجوی دقیق تر</div>
      <div class="card-body p-3 pt-0 pb-1">
        <named-tags
          :keyword="keyword"
          label="ارسال رایگان"
          :value="value.namedTags"
          @input="(v) => updateValue('namedTags', v)"
          @namedTags="(v) => (namedTags = v)"
        />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch
          label="ارسال رایگان"
          :value="value.freeShipping"
          @input="(v) => updateValue('freeShipping', v)"
        />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch
          label="فقط کالاهای موجود"
          :value="value.isExists"
          @input="(v) => updateValue('isExists', v)"
        />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch
          label="آماده ارسال"
          :value="value.isReady"
          @input="(v) => updateValue('isReady', v)"
        />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch
          label="تخفیف دار ها"
          :value="value.hasDiscount"
          @input="(v) => updateValue('hasDiscount', v)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NamedTags from './NamedTags/NamedTags'
import USwitch from '~/components/UiKit/USwitch/USwitch'

export default {
  name: 'FilterProducts',
  components: {
    NamedTags,
    USwitch,
  },
  props: {
    keyword: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      namedTags: [],
    }
  },
  computed: {
    selectedFilters() {
      return this.namedTags.filter((namedTag) =>
        this.value.namedTags.includes(namedTag.id)
      )
    },
  },
  methods: {
    updateValue(key, value) {
      this.$emit('input', { ...this.value, [key]: value })
    },
    removeSelectedFilter(selectedFilter) {
      const namedTags = this.value.namedTags.filter(
        (id) => id !== selectedFilter.id
      )
      this.updateValue('namedTags', namedTags)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'FiltersProducts';
</style>

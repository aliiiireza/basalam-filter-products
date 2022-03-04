<template>
  <div class="filter-products">
    <div class="card mb-3">
      <div class="card-header">فیلتر های اعمال شده</div>
      <div class="card-body">بر اساس</div>
    </div>

    <div class="card mb-3">
      <div class="card-header">جستجوی دقیق تر</div>
      <div class="card-body">بر اساس</div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch v-model="filters.freeShipping" label="ارسال رایگان" />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch v-model="filters.isExists" label="فقط کالاهای موجود" />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch v-model="filters.isReady" label="آماده ارسال" />
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body p-2">
        <u-switch v-model="filters.hasDiscount" label="تخفیف دار ها" />
      </div>
    </div>
  </div>
</template>

<script>
import USwitch from '~/components/UiKit/USwitch/USwitch'
export default {
  name: 'FilterProducts',
  components: {
    USwitch,
  },
  props: {
    filter: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      filters: {
        freeShipping: false, // فیلتر محصولات ارسال رایگان
        isExists: false, // فیلتر محصولات موجود
        isReady: false, //  فیلتر محصولات آماده ارسال
        hasDiscount: false, // فیلتر محصولات تخفیف‌دار
        namedTags: [],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'FilterProducts';
</style>

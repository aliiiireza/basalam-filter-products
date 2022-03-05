<template>
  <div class="card mb-3">
    <div class="card-body p-3">
      <div class="sort-products">
        نمایش بر اساس:
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'sort-products__item',
            JSON.stringify(selfValue) === JSON.stringify(item.sort)
              ? 'active'
              : '',
          ]"
          @click="handleClick(item.sort)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelMixin from '@/mixins/model'
export default {
  name: 'SortProducts',
  mixins: [modelMixin],
  data() {
    return {
      items: [
        {
          name: 'مرتبط‌ترین',
          sort: null,
        },
        {
          name: 'پرفروش‌ترین',
          sort: {
            field: 'salesCount',
            dir: 'desc',
          },
        },
        {
          name: 'بیشترین تخفیف',
          sort: {
            field: 'maxDiscount',
            dir: 'desc',
          },
        },
        {
          name: 'ارزان‌ترین',
          sort: {
            field: 'price',
            dir: 'asc',
          },
        },
        {
          name: 'گران‌ترین',
          sort: {
            field: 'price',
            dir: 'desc',
          },
        },
        {
          name: 'جدیدترین',
          sort: {
            field: 'id',
            dir: 'desc',
          },
        },
      ],
    }
  },
  methods: {
    handleClick(sort) {
      this.selfValue = sort
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'SortProducts';
</style>

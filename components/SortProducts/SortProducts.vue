<template>
  <div class="card mb-3">
    <div class="card-body">
      بر اساس

      <div v-for="(item, index) in items" :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortProducts',
  props: ['value'],
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
}
</script>

<style lang="scss" scoped>
@import 'SortProducts';
</style>

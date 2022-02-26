<template>
  <div class="card mb-3">
    <div class="card-body">
      بر اساس

      <div v-for="(item, index) in items">
        {{ item.title }}
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
        { title: 'مرتبط ترین' },
        { title: 'پرفروش ترین' },
        { title: 'بیشترین تخفیف' },
        { title: 'ارزان ترین' },
        { title: 'گران ترین' },
        { title: 'جدید ترین' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'SortProducts';
</style>

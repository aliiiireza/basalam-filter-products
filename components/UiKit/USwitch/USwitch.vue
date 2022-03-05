<template>
  <label class="u-switch">
    <input v-model="selfValue" type="checkbox" class="u-switch__input" />
    <span v-if="label !== ''" class="u-switch__label">{{ label }}</span>
  </label>
</template>

<script>
import modelMixin from '@/mixins/model'
export default {
  name: 'USwitch',
  mixins: [modelMixin],
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'USwitch';
</style>

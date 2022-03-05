<template>
  <label class="u-checkbox">
    <input v-model="selfValue" type="checkbox" class="u-checkbox__input" />

    <i
      :class="[
        'u-checkbox__checkmark',
        selfValue ? 'ic-checked' : 'ic-unchecked',
      ]"
    />

    <span class="u-checkbox__label" v-text="label" />
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
@import 'UCheckbox';
</style>

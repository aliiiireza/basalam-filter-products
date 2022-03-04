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
export default {
  name: 'USwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selfValue: this.value,
    }
  },
  watch: {
    selfValue: {
      handler(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'UCheckbox';
</style>

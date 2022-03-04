<template>
  <label class="u-switch">
    <input v-model="selfValue" type="checkbox" class="u-switch__input" />
    <span v-if="label !== ''" class="u-switch__label">{{ label }}</span>
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
@import 'USwitch';
</style>

export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: { type: [Boolean, String, Number, Array, Object], default: '' },
  },
  data() {
    return {
      selfValue: '',
    }
  },
  watch: {
    value: {
      handler(val) {
        if (this.selfValue !== val) this.selfValue = val
      },
      immediate: true,
      deep: true,
    },
    selfValue(val) {
      if (val !== this.value) this.$emit('input', val)
    },
  },
  methods: {
    formatNumber(val) {
      if (val) {
        return val.replace(/\D/g, '').replace(/^0+/, '')
      }
      return 0
    },
  },
}

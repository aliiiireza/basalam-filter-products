import Vue from 'vue'
import fa from '@/utils/validations/vee-validate-fa.json'
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend,
} from 'vee-validate'
import {
  min,
  max,
  email,
  required,
  min_value,
  max_value,
  numeric,
  digits,
} from 'vee-validate/dist/rules.umd.js'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('min', min)
extend('max', max)
extend('email', email)
extend('numeric', numeric)
extend('required', required)
extend('min_value', min_value)
extend('max_value', max_value)
extend('digits', digits)
extend('username', (value) =>
  /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$/.test(value)
)
extend('start_with_letter', (value) => /^[a-zA-Z]/.test(value))

localize('fa', fa)
configure({
  mode: 'eager',
  classes: {
    valid: '',
    invalid: 'is-invalid',
  },
})

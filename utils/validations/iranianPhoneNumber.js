import { convertToEnDigit } from '@/utils/utilities'

function validateRegex(input) {
  input = convertToEnDigit(input)

  const regexPattern = /^0?9\d{9}$/g

  const validate = new RegExp(regexPattern)

  return validate.test(input)
}

const validator = {
  getMessage(field) {
    return `${field} باید 10 رقم باشد.`
  },
  validate(value) {
    return validateRegex(value)
  },
}

export default validator

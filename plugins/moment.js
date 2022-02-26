import Vue from 'vue'

const moment = require('moment-jalaali')

moment.loadPersian({
  dialect: 'persian-modern',
  usePersianDigits: true,
})

moment.locale('fa')

Vue.prototype.moment = moment

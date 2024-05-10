
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./swap-sdk-0x.cjs.production.min.js')
} else {
  module.exports = require('./swap-sdk-0x.cjs.development.js')
}

const withPWA = require('next-pwa')
const path = require("path")

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  future: {
    webpack5: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  }
})

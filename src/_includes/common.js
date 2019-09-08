const CleanCSS = require('clean-css')
const https = require('https')

const { NODE_ENV } = process.env

const isProduction = NODE_ENV === 'production'

const cssmin = code => isProduction ? new CleanCSS({}).minify(code).styles : code

const gets = (url) => new Promise((resolve, reject) => {
  https.get(url, (response) => {
    let body = ''
    response.on('data', (chunk) => {
      body += chunk
    })
    response.on('end', () => resolve(body))
  }).on('error', reject)
})

module.exports = {
  cssmin,
  gets,
  isProduction
}

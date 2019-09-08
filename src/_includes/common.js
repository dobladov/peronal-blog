const CleanCSS = require('clean-css')
const https = require('https')

const cssmin = code => new CleanCSS({}).minify(code).styles

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
  gets
}

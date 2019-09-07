const CleanCSS = require('clean-css')

const cssmin = code => new CleanCSS({}).minify(code).styles

module.exports = {
  cssmin
}

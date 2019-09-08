const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginPWA = require("eleventy-plugin-pwa")
const htmlmin = require("html-minifier")
const { isProduction } = require('./src/_includes/common')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss)

  if (isProduction) {
    eleventyConfig.addPlugin(pluginPWA)
    
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if( outputPath.endsWith(".html") ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified
      }
      return content
    })

    eleventyConfig.addTransform("jsonmin", (content, outputPath) => {
      if( outputPath.endsWith(".json") ) {
        return JSON.stringify(JSON.parse(content))
      }
      return content
    })
  }
  
  eleventyConfig.addFilter("inlineHTML", (value) => {
    return value.replace(/\r?\n|\r/g, "")
  })
}

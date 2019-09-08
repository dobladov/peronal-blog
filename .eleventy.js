const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginPWA = require("eleventy-plugin-pwa")
const { isProduction } = require('./src/_includes/common')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss)
  isProduction && eleventyConfig.addPlugin(pluginPWA)
  
  eleventyConfig.addFilter("inlineHTML", (value) => {
    return value.replace(/\r?\n|\r/g, "")
  })
}

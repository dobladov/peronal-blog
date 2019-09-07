const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addFilter("inlineHTML", (value) => {
    return value.replace(/\r?\n|\r/g, "")
  })
}

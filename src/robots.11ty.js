class robots {
  async data () {
    return {
      permalink: '/robots.txt',
      sitemapIgnore: true
    }
  }

  render ({ collections, env }) {
    return `
      User-agent: *

      Sitemap: https://${env.url}/sitemap.xml
      User-agent: ia_archiver
      Disallow: /
    `
  }
}

module.exports = robots

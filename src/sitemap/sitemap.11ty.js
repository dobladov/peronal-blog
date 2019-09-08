class sitemap {
  async data () {
    return {
      permalink: '/sitemap.xml',
      sitemapIgnore: true
    }
  }

  render ({ collections, env }) {
    return `
      <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${collections.all.filter(item => !item.data.sitemapIgnore).map(item => `
        <url>
          <loc>https://${env.url}${item.url}</loc>
          <lastmod>${item.date.toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.5</priority>
        </url>
      `).join('\n')}
      </urlset> 
      `
  }
}

module.exports = sitemap

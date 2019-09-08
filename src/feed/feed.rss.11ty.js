class rss {
  async data () {
    return {
      permalink: '/index.xml',
      sitemapIgnore: true
    }
  }

  render ({ collections, env }) {
    return `
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
          <title>${env.title}</title>
          <link>https://${env.url}</link>
          <description>${env.description}</description>
          <generator>Eleventy</generator>
          <language>en</language>
          <managingEditor>${env.email} (${env.author})</managingEditor>
          <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
          <atom:link href="https://blog.localtunnel.me/index.xml" rel="self" type="application/rss+xml"/>
          ${collections.post.map(post => `
            <item>
              <title>${post.data.title}</title>
              <link>https://${env.url}${post.url}</link>
              <pubDate>${post.date.toUTCString()}</pubDate>
              <guid>https://${env.url}${post.url}</guid>
              <description>
                ${post.templateContent.replace(/<\/?[^>]+(>|$)/g, '')}
              </description>
            </item>
          `).join('\n')}
        </channel>
      </rss>
    `
  }
}

module.exports = rss

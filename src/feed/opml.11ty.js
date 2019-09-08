class envmap {
  async data () {
    return {
      permalink: '/opml.xml',
      sitemapIgnore: true
    }
  }

  render ({ collections, env }) {
    return /* html */`
      <opml version="2.0">
        <head>
          <title>${env.title}</title>
          <dateCreated>${new Date().toGMTString()}</dateCreated>
          <ownerName>${env.author}</ownerName>
        </head>
        <body>
          <outline text="${env.title} feeds" title="${env.title} feeds"  type="include">
            <!-- <outline title="RSS 2.0 feed" text="RSS 2.0 feed" htmlUrl="https://sizeof.cat/" type="rss" xmlUrl="https://sizeof.cat/index.xml"/> -->
            <outline title="Atom feed" text="Atom feed" htmlUrl="https://${env.url}" type="atom" xmlUrl="https://${env.url}/feed.xml"/>
            <outline title="JSON feed" text="JSON feed" htmlUrl="https://${env.url}" type="json" xmlUrl="https://${env.url}/feed.json"/>
          </outline>
        </body>
      </opml>
    `
  }
}

module.exports = envmap

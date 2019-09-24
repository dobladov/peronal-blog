class envmap {
  async data (data) {
    return {
      layout: 'layout',
      // sitemapIgnore: true,
      pagination: {
        data: 'collections',
        size: 1,
        alias: 'tag',
        filter: ['post', 'all']
      },
      permalink: ({ tag }) => {
        return `/tags/${tag}/`
      }
    }
  }

  render ({ tag }) {
    return `
      <h1>#${tag}</h1>
    `
  }
}

module.exports = envmap

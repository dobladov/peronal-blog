class postIndex {
  data () {
    return {
      layout: 'layout'
    }
  }

  render ({ collections }) {
    return `
      <ul>
        ${collections.post.map((post) => `
          <li>
            <a href=${post.url}>${post.data.title}</a>
          </li>
        `).join('\n')}
      </ul>
    `
  }
}

module.exports = postIndex

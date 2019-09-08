const formatter = new Intl.DateTimeFormat('en', { month: 'short' })

class postIndex {
  data () {
    return {
      layout: 'layout'
    }
  }

  render ({ collections, content }) {
    const posts = []
    collections.post.sort((a, b) => a.date - b.date).forEach(post => {
      if (!posts[post.date.getFullYear()]) {
        posts[post.date.getFullYear()] = []
      }
      posts[post.date.getFullYear()].push(post)
    })

    return `
      ${content}
      ${Object.keys(posts).sort((a, b) => b - a).map(year => `
        <h2>${year}</h2>
        <ul>
          ${posts[year].map((post) => `
            <li>
              <span>${formatter.format(post.date)} ${post.date.getDate()}</span>
              &nbsp;
              <a href=${post.url}>${post.data.title}</a>
            </li>
          `).join('\n')}
        </ul>
      `).join('\n')}
    `
  }
}

module.exports = postIndex

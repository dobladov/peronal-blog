const formatter = new Intl.DateTimeFormat('en', { month: 'long' })

class post {
  data () {
    return {
      layout: 'layout'
    }
  }

  render ({ content, title, page, tags = [] }) {
    const d = new Date(page.date)
    const formatedDate = `${d.getDate()} ${formatter.format(post.date)} ${d.getFullYear()}`
    const formatedTags = tags.filter(tag => tag !== 'post')

    return `
      <div class="Post">
        <h1>${title}</h1>
        ${formatedDate}
        ${content}
        <br>
        ${formatedTags.map((tag, i) => `
          ${i > 0 ? ', ' : ''}
          <a href=${`/tags/${tag}`}>#${tag}</a>
        `).join('\n')}
      </div>
    `
  }
}

module.exports = post

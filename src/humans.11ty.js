class sitemap {
  async data () {
    return {
      permalink: '/humans.txt',
      sitemapIgnore: true
    }
  }

  render ({ collections, env }) {
    return `
      /* TEAM */

      ${env.author}
      - Site: ${env.url}
      - Email: ${env.email}


      /* SITE */
      
      - Standards: HTML, CSS, Javascript
      - Software: Eleventy
      - Tools: vscode
      - Hosting: GitHub
      - Code: https://github.com/dobladov/personal-blog

    `
  }
}

module.exports = sitemap

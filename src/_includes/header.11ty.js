const { cssmin } = require('./common')

const style = cssmin(`
  header > nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.3rem;
    margin-top: 20px;
  }
`)

const header = ({ title }) => `
  <style>
    ${style}
  </style>

  <header>
    <nav>
      <a href="/">
        Home
      </a>
      <a href="/blog">
        Blog
      </a>
    </nav>
  </header>
`

module.exports = header

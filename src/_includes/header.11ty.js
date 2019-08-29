const header = ({title}) => `
  <style>
    header > nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 1.3rem;
      margin-top: 20px;
    }
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
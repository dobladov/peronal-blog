const header = require('./header.11ty.js')
const { cssmin } = require('./common')

const style = cssmin(`
  body {
    background-color: #F5F5F5;
    font-size: calc(16px + .5vw);
    font-family: futura-pt,sans-serif,sans-serif;
    color: #3c3c3c;
  }

  a {
    color: #3c3c3c;
    text-decoration: none;
    background-image: linear-gradient(#7eb530, #7eb530);
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: left 0 bottom -45%;
  }

  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5rem;
  }

  h1 {
    font-size: calc(1em + 1.5vw);
  }
`)

class layout {
  data () {
    return {
      title: 'Hello'
    }
  }

  render ({ title, content }) {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${title}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
      <link rel="alternate" type="application/rss+xml" title="Feed" href="/feed.xml" />
      <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
      <style>
        ${style}
      </style>

      </head>
      <body>
        ${header({ title })}
        <div class="wrapper">
          <h1>${title}</h1>
          ${content}
        </div>
    </body>
    </html>
    `
  }
}

module.exports = layout

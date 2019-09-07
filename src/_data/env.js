require('dotenv').config()

const { title, author, email, url, feedSubtitle } = process.env

module.exports = {
  title,
  author,
  email,
  url,
  feedSubtitle
}

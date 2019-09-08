require('dotenv').config()

const { title, author, email, url, description } = process.env

module.exports = {
  title,
  author,
  email,
  url,
  description
}

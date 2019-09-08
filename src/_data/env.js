require('dotenv').config()

const { title, author, email, url, description, NODE_ENV } = process.env

module.exports = {
  title,
  author,
  email,
  url,
  description,
  NODE_ENV
}

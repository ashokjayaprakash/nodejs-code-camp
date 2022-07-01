const express = require('express')
const app = express()
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
//  req => middleware => res

/**
 * Morgan https://www.npmjs.com/package/morgan
 * HTTP Request logger 
 */


// Replacing custom logger with morgan library - 3rd Party
app.use(morgan('tiny'))

// File logging
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

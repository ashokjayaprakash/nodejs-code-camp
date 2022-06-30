const express = require('express')
const app = express()
const morgan = require('morgan')
//  req => middleware => res

/**
 * Morgan https://www.npmjs.com/package/morgan
 * HTTP Request logger 
 */


// Replacing custom logger with morgan library
app.use(morgan('tiny'))

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

const express = require('express')
const app = express()

//  req => middleware => res

/**
 * Types of middleware
 * 
 * 1. Application Level Middleware
 * 2. Route level middleware
 * 
 */

// Application Level Middleware - Built in Middleware
app.use(express.json())
// -> req.body -> convert to json -> req.body



/*

Route level middleware Flow
Request Path -> Middleware -> next callback -> controller logic

Generic Operation
  1. Built in Middleware
  2. Logging
  3. Authentication
  4. Validation
  5. Payload Transformation
*/

// Custom middleware
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

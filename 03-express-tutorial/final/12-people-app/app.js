const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('../../methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



/**
 * Generic Folder Structure
 * 
 * index.js / app.js - Root File - All global modules are injected
 * route - To configure the route
 *  user.js
 *  product.js
 * controller - Controller operation based on (req, res)
 *  user-controller.js
 *  product-controller.js
 * model - Class level Entities
 * service - DB Operation 
 *  user-service.js
 *  user-service.js
 * middleware - custom middleware
 * util - Common application level utility
 * 
 */
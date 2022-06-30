const express = require('express')
const app = express()
const { products } = require('../data')

// To return json
app.get('/', (req, res) => {
  res.json(products) // applciation/json
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

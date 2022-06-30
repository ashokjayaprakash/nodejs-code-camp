const express = require('express')
const app = express()
const authenticateToken = require('./middleware/auth');

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('../../methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
// app.use([authenticateToken])

app.use('/api/people', authenticateToken, people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

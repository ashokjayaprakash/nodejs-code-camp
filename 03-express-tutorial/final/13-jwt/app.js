require('dotenv').config();

console.log(process.env);
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

/*
Ecommerce
Auth
Product -> 4 CRUD Operation Totally (20+)
Inventory -> inventory
Order -> order/
Cart -> cart/
User
*/

/* Auth Strategeis
* JWT Token 
* Basic Authentication 
    Password Storing Technique
      Hashing (test/test123) -> test123 -> O1F3D45GE
      password -> hasing(pasword) -> store
      login -> hasing(pasword) -> get password hash in db -> compare both
* OAUTH
    Google / Facebook Auth / Okta
*/
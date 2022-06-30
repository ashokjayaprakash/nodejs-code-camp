const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/', (req, res) => {
  const { username, password } = req.body
  if (username && password) {  
    const id = randomIntFromInterval(1,4)
    let user = {
      username,
      id: Math.random(100000)
    }
    const token = generateAccessToken(user);
    return res.json({ token })
  }
  return res.status(401).send('Please Provide Credentials')
})

function generateAccessToken(data) {
  return jwt.sign(data, "APPSECRET", { expiresIn: '1800s' });
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = router

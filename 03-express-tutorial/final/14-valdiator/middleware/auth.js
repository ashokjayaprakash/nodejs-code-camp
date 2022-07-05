const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']
    
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(401)
      req.user = user
      next()
    })
}

module.exports = authenticateToken
const http = require('http')
// const fs = require('fs');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

  // fs.writeFileSync('req.log', req)
  console.log(req)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    return res.end('About Page')
  }

  if (req.url === '/contact') {
    setTimeout(() => {
      return res.end('Contact Us')
    }, 10000)
  }
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})

const express = require('express')
const app = express()
const { products } = require('../data')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

/** 
REST Resource Standards 

Resource Name: products

GET - READ
POST - CREATE {id }
PUT - UPDATE - {id, name, email, age } -> {id, name, email}
PATCH - OVERIDE - {id, name} -> {id, name, email, age }
DELETE - DELETE [ Soft / Hard ]
HEAD - GET Headers

BASIC CRUD Operation

GET -> /products - List All Product
POST -> /products -> { id: 200 }
GET -> /product/{productId} - Get Product by Id
PUT -> /product/{productId} - Update Product by Id
DELETE -> /product/{productId} - DELETE Product by Id

------ * -----

Review

POST -> /product/{productId}/review
GET -> /product/{productId}/review 
PUT -> /product/{productId}/review/{reviewId}

DELETE -> /product/delete?id=20

HTTP Status Code
----------------
2XX - Sucess
  200 - OK
  201 - Async Processing
  204 - No Content
3XX - Redirection
4XX - Client Error
  400 - Bad Request
  401 - Auth Error
  403 - Forbidden
  404 - Not Found
  405 - Method Not Allowed
  409 - Conflict -> 1 - aj@generator.la - 2 - tes@generator.la => aj@generator.la
  415 - Unsupported Media Type (json / xml)
5XX Server Error

Request Params -> req.params
Query String -> req.query

*/



/**
 * List all products
 * curl -v http://localhost:5000/api/products
 */
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})

/**
 * Get product by Id
 * curl -v http://localhost:5000/api/products/
 */

app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

/**
 * Request Params
 * curl -v http://localhost:5000/api/products/1/reviews/1
 */
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.json(req.params)
})

/**
 * Filter based on query string
 * curl -v http://localhost:5000/api/query?limit=61&search=leather
 */
app.get('/api/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

/**
 * Filter based on query string
 * curl -v http://localhost:5000/api/query --data { limit:1 }
 */
 app.post('/api/query', (req, res) => {
  console.log(req.body)
  const { search, limit } = req.body
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

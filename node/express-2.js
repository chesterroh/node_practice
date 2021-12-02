const express = require('express');
const path = require('path')
const { products, people } = require('./data')

const app = express();

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.end("<h1> fuck the world </h1><p> <a href='./api/products'>products</a>")
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((item) => {
        const { id, name, image } = item
        return { id, name, image }
    })
    res.json(newProducts)
})

// We can pass the argument using GET method as follows.
app.get('/api/products/:productID', (req, res) => {
    console.log(req)
    console.log(req.params)

    const { productID } = req.params
    const aProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if (!aProduct) {
        return res.status(404).send(`product id ${productID} doesn't exist`)
    }

    res.json(aProduct)
})

app.get('/api2/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)  // params are the URL encoded information
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)   // query is the one that contains the arguments
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search))
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        res.status(200).json(( {success: true, data: [] }))
    }
    
    res.status(200).json(sortedProducts)

})

app.listen(3000, (req, res) => {
    console.log("server is listening on port 3000")
})
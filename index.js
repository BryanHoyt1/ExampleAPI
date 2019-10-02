const express = require('express')
const app = express()
const beerRouter = require('./routes/beerRouter')
const mongoose = require('mongoose')

app.get('/beers', beerRouter)

app.use('/', (req, res) => {
    console.log(`Something hit me!`)
    res.send(`<h1>Welcome to the beerAPI</h1>`)
})

const port = process.env.PORT || 4444

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

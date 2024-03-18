require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    // if it gets any request 
    // sends hello world
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => { res.send("ITS X NOW") })
app.get('/login', (req, res) => { res.send("<h1>Welcome</h1>") })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
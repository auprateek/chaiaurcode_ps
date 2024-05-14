const express = require('express')
const app = express()
 
require('dotenv').config()

const port = process.env.PORT


app.get('/', function (req, res) {
  res.send('Hello World from pRateek')
})

app.get('/twitter', (req, res) =>{
    res.send('<h2>youtube.com</h2>' , `Port active ${port}`)
  })
app.listen(port, (req,res)=>{
    console.log(`Port active ${port}`)
})
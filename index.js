const express = require('express')
const phones = require('./Phone-shop.json')
const app = express()
const port = 5000;
app.get('/',(req, res)=>{
    res.send('my secount server to the golbal sserver this is my kamrul hassa')
})

app.listen(port, ()=>{
    console.log(`my secoutn servsre,  ${port}`)
} )
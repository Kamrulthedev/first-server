const express = require('express')
const phones = require('./Phone-shop.json');
const app = express()
const port = 5000;
app.get('/',(req, res)=>{
    res.send('my secount server to the golbal sserver this is my kamrul hassan')
})


app.get('/Phones', (req, res)=>{
    res.send(phones)
})

app.get('/Phones/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    console.log('Phoenes.id',id)
    const phone = phones.find(phone => phone.id)|| {};
    res.send(phone)
})


app.listen(port, ()=>{
    console.log(`my secoutn servsre,  ${port}`)
} )
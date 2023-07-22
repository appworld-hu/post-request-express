const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html' )
})

app.post('/', (req, res)=>{
    res.send(`name: ${req.body.name}, email: ${req.body.email}, password: ${req.body.password}`);
})

app.listen(3000)
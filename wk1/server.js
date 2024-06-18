const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/', require('./routes'));

//app.use(bodyParser.json());


app.listen(port, () =>{
    console.log("Server is listening");
})
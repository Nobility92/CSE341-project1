const express = require('express');
const routes = require('express').Router();
const path = require('path');


routes.get('/', (req, res) => {
    res.send("My name is Henry");
})
// routes.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'../frontend'));
// });

// routes.get('/', express.static(path.join(__dirname,'frontend')));

//  routes.get((req, res) => {
//      res.status(404);
//         res.send(`<h1>Error, Page not Found</h1>`);
//  })

module.exports = routes

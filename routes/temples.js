const express = require('express');
const routes = require('express').Router();

const templecontroller = require("../controllers/temples");

routes.get('/temple', templecontroller.getAll);

routes.get('/temple:id', templecontroller.getSingle);

module.exports = routes
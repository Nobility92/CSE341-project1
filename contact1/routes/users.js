const express = require('express');
const routes = require('express').Router();

const userscontroller = require("../controllers/users");

routes.get('/user', userscontroller.getAll);

routes.get('/user:id', userscontroller.getSingle);

module.exports = routes



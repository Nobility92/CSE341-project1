const express = require('express');
const routes = require('express').Router();

const userscontroller = require("../controllers/users");

routes.get('/user', userscontroller.getAll);

routes.get('/:id', userscontroller.getSingle);
routes.post('/user', userscontroller.createUser);
routes.put('/:id', userscontroller.updateUser);
routes.delete('/:id', userscontroller.deleteUser);

module.exports = routes



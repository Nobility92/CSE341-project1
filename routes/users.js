const express = require('express');
const routes = require('express').Router();

const userscontroller = require("../controllers/users");
const validate = require("../middleware/validate");

routes.get('/user', userscontroller.getAll);
routes.get('/:id', userscontroller.getSingle);
routes.post('/user', validate.saveUser, userscontroller.createUser);
routes.put('/:id', validate.saveUser, userscontroller.updateUser);
routes.delete('/:id', userscontroller.deleteUser);

module.exports = routes



const express = require('express');
const routes = require('express').Router();

const staffcontroller = require("../controllers/staff");
const validate = require("../middleware/validate");

routes.get('/staff', staffcontroller.displayAll);
routes.get('/:id', staffcontroller.displaySingle);
routes.post('/staff', validate.saveUser, staffcontroller.createStaff);
routes.put('/:id', validate.saveUser, staffcontroller.updateStaff);
routes.delete('/:id', staffcontroller.deleteStaff);

module.exports = routes
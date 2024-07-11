const express = require('express');
const routes = require('express').Router();
const passport = require('passport');

const staffcontroller = require("../controllers/staff");
const validate = require("../middleware/validate");
const {IsAuthenticated} = require("../middleware/authenticate");

routes.get('/staff', staffcontroller.displayAll);
routes.get('/:id', staffcontroller.displaySingle);
routes.post('/staff', IsAuthenticated, validate.saveUser, staffcontroller.createStaff);
routes.put('/:id', IsAuthenticated, validate.saveUser, staffcontroller.updateStaff);
routes.delete('/:id', IsAuthenticated, staffcontroller.deleteStaff);

routes.get('/login', passport.authenticate('github'), (req, res) => {});

routes.get('/logout', function(req, res, next) {
    req.logout(function(err){
        if (err){return next(err);}
        res.redirect('/');
    });
});

module.exports = routes
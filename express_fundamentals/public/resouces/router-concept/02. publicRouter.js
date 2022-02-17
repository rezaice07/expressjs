
const express = require('express');

const publicRouter = express.Router();

publicRouter
    .route('/user')
    .all((req, res, next) => {
        console.log('This is logger');   //middleware
        next();
    })
    .get((req, res) => {
        res.send('user Get');
        res.end();
    })
    .put((req, res) => {
        res.send('User PUT');
        res.end();
    })
    .post((req, res) => {
        res.send('User Post');
        res.end();
    })
    .delete((req, res) => {
        res.send('User delete');
        res.end();
    })


module.exports = publicRouter;

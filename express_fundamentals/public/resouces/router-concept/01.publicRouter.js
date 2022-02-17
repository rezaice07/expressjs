
const express = require('express');

const publicRouter = express.Router();

//middleware 
const logger=(req,res,next)=>{
    console.log('This is logger');
    next();
}

publicRouter.all('*',logger);

publicRouter.get('/', (req, res) => {
    res.send('Home');
    res.end();
})

publicRouter.get('/about', (req, res) => {
    res.send('About');
    res.end();
})


module.exports = publicRouter;

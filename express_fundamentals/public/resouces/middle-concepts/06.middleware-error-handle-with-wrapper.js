const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const adminRouter = express.Router();

//Start adminRouter
//logger middleware when wrapped

const loggerWrapper = (options) => {
  return (
    (req, res, next) => {
      if (options.log) {
        const logDetails = `${new Date(Date.now()).toLocaleDateString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`;
        console.log(logDetails);
        next();
      }
      else {
        throw new Error('This is an error');
      }
    }
  )
}

//error logger middleware
const errorLogger = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send('There was a server side error');
}

adminRouter.use(loggerWrapper({ log: true }));

adminRouter.use(errorLogger);

adminRouter.get('/orderhistory', (req, res) => {
  res.send('this is order histor of a customer');
})

app.use('/customer', adminRouter);

//End adminRouter

//Main Route
app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.send('Product Details');
  console.log('Product Details')
})



//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
06.middleware-error-handle-with-wrapper.js
------------------------
Step -01: 
--------
check response of a request in admin router by changing value at 
loggerWrapper({ log: true }) or loggerWrapper({ log: false })

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=JC8pvR7ZOiE&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

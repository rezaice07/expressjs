const express = require('express');
const app = express();

const adminRouter=express.Router();


//Start adminRouter
const logger = (req,res,next)=>{
  const logDetails=`${new Date(Date.now()).toLocaleDateString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`;
  console.log(logDetails);
  next();  
}

adminRouter.use(logger);


adminRouter.get('/orderhistory',(req,res)=>{
  res.send('this is order histor of a customer');
})

app.use('/customer',adminRouter);

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
04.middleware-in-router-lavel.js
------------------------
Step -01: 
--------
In this tutorial, a router named as adminRouter that uses the logger middleware.
and finaly the adminRouter middleware is using with app for base/main route customer
So, this is the router level middleware

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=JC8pvR7ZOiE&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//built-in middleware
app.use(express.json());

//third party middleware  - cookie parser middleware
app.use(cookieParser());

const adminRouter=express.Router();

//Start adminRouter
//logger middleware
const logger = (req,res,next)=>{
  const logDetails=`${new Date(Date.now()).toLocaleDateString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`;
  console.log(logDetails);

  throw new Error('This is an error');
  //next();  
}

const errorMiddleware =(err, req,res,next)=>{
  console.log(err.message);
  res.status(500).send("There was a server side error");
}

adminRouter.use(logger);
adminRouter.use(errorMiddleware);

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
05.middleware-built-in-error-handle.js
------------------------
Step -01: 
--------
Install cookie parser
cli: npm i cookie-parser

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=JC8pvR7ZOiE&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

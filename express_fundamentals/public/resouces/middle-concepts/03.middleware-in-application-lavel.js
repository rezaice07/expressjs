const express = require('express');
const app = express();


const logger = (req,res,next)=>{
  const logDetails=`${new Date(Date.now()).toLocaleDateString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`;
  console.log(logDetails);
  next();  
}

app.use(logger);

app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.send('Product Details');
  console.log('Product Details')  
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
03.middleware-in-application-lavel.js
------------------------
Step -01: 
--------
In the logger middleware the next() method will clear the main route.
So, this is the application level middleware

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=JC8pvR7ZOiE&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

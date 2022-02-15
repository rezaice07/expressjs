const express = require('express');
const app = express();


const logger = (req,res,next)=>{
  const logDetails=`${new Date(Date.now()).toLocaleDateString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`;
  console.log(logDetails);
  //next();

  res.end();
}

app.use(logger);

app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.send('Product Details');
  console.log('Product Details')
  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
02.middleware-break-operation-in-middleware-section.js
------------------------
Step -01: 
--------
In this example, a middle ware for logger where res.end that can be used to end request response before final GET route 

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=JC8pvR7ZOiE&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

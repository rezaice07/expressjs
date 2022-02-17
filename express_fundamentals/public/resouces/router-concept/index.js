const express = require('express');
const adminRouter =require('./public/resouces/router-concept/adminRouter');
const publicRouter =require('./public/resouces/router-concept/publicRouter');
const app = express();


app.use('/admin',adminRouter);

app.use('/',publicRouter);

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
01.Router.js
------------------------
Step -01: 
--------
check response of a request in admin router by changing value at 
loggerWrapper({ log: true }) or loggerWrapper({ log: false })

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=SAZU6-Ucrno&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=21&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

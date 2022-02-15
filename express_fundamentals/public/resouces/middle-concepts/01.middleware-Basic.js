const express = require('express');
const app = express();

const middleWareOne=(req,res,next)=>{
  console.log('Middle Ware One');
  next();
}

const middleWareTwo=(req,res,next)=>{
  console.log('Middle Ware Two');
  next();
}

app.use(middleWareOne);
app.use(middleWareTwo);

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
01.middleware-Basic.js
------------------------
Step -01: 
--------
An application should have multiple middleware.
Here, The two middle ware like middleWareOne and middleWareTwo. 
Then it's need to use by using app. example - app.use(middleWareOne) and app.use(middleWareTwo).
It will give response middle ware one and then middle ware two then the main route like get 

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=JC8pvR7ZOiE&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

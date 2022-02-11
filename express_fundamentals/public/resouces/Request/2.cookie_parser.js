const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

//2.9.cookie_parser.js

app.use(express.json());
app.use(cookieParser());

app.get('/user/:id',(req,res)=>{
  //console.log(req.cookies);
  res.send('this is user post method');
})

app.post('/user',(req,res)=>{
  console.log(req.body);
  console.log(req.cookies);
  res.send('this is user post method');
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


/*
Step -01: 
--------
installation:
cli: npm i cookie-parser

Step -02: 
---------
add a cookie in postman for domain: localhost 
add Play_With_Code=value;

Step -03:
---------
added above code 

References:
-----------
https://www.youtube.com/watch?v=gPp65W7tnFM&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=18&ab_channel=LearnwithSumit-LWS-Bangladesh

*/
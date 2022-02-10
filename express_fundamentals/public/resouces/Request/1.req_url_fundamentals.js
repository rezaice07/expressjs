const express=require('express');
const app=express();
 
//1.1.req_url_fundamentals.js

//child route
const clientRout=express.Router();
clientRout.get('/dashboard',(req,res)=>{
  console.log(req.baseUrl); //  /client
  console.log(req.originalUrl); //  /client/dashboard
  console.log(req.url);   //  /dashboard
  console.log(req.path); // /dashboard
  console.log(req.hostname);
  console.log(req.method);
  res.send('This is client dashbaord');
});
//client reoute
app.use('/client',clientRout);



//root/main route
app.get('/user/:id',(req,res)=>{  
  //request url: localhost:3001/user/5454?username=rejawebs
  console.log(req.baseUrl); // blank
  console.log(req.originalUrl);  //here original url: /user/5454?username=rejawebs
  console.log(req.url);   //here url: /user/5454?username=rejawebs
  console.log(req.path); // only removed querystring portion: /user/5454 
  console.log(req.hostname); // always same for both root and child route
  console.log(req.protocol); // http
  console.log(req.params); // { id: '5454' }
  console.log(req.query); // { username: 'rejawebs' }
  res.send('This is home');  
});

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})

//https://www.youtube.com/watch?v=gPp65W7tnFM&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=18&ab_channel=LearnwithSumit-LWS-Bangladesh
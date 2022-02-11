const express=require('express');
const app=express();

app.use(express.json());

app.post('/user',(req,res)=>{
  console.log(req.accepts('application/json'));
  console.log(req.body);
  if(!req.accepts('application/json')){
    res.send('Content not accepted');
  }else{
  res.send('this is user post method');
  }
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


/*
Accept
------------------------
Step -01: 
--------
By default postman set accept in accepts = *//* => only single splash
But if you want to resitrict it to server end, add an accept in 
accepts='html' or accepts='text/html' or accepts='image/png' 
or accepts='text/plain'

the server will return accepts value if match found otherwise value should be false.

Step -02:
---------
added above code 

References:
-----------
http://expressjs.com/en/4x/api.html#req.accepts

*/
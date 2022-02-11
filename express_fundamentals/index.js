const express=require('express');
const app=express();

app.use(express.json());

app.post('/user',(req,res)=>{
  console.log(req.get('content-type'));
  console.log(req.body);
  res.send('this is post from post method');
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


/*
get
------------------------
Step -01: 
--------
If you send header info to server end, it is possible to get then actual name
by using reg.get('header_name') method.

References:
-----------
https://www.youtube.com/watch?v=sA5Hno7n01g&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=19&ab_channel=LearnwithSumit-LWS-Bangladesh

*/
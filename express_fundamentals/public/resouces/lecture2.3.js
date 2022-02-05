
const express=require('express');
const app=express();

//for get request
app.all('/',(req,res)=>{    
    res.send('This is home page with get request');
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
const express=require('express');
const app=express();
const handler=require('./handler');

app.locals.title="Play With Code";


//for get request
// app.get('/',(req,res)=>{
//     console.log(app.locals.title);
//     res.send('This is home page with get request');
// })

app.get('/',handler)

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
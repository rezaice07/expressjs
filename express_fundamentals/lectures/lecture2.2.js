const express=require('express');
const app=express();
const client=express();
const company=express();


company.on('mount', function (parent) {
    console.log('company Mounted')
    console.log(parent) // refers to the parent app
  })

//client get request
client.get('/dashboard/next',(req,res)=>{
    console.log(client.mountpath);
    res.send('This is client dashboard');
})

//company get request
company.get('/dashboard',(req,res)=>{
    console.log(company.mountpath);
    res.send('This is company dashboard');
})

//for get request
app.get('/',(req,res)=>{    
    res.send('This is home page with get request');
})


app.use('/client',client);
app.use('/company',company);

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
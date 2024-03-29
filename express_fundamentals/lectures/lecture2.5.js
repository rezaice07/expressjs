const express=require('express');
const app=express();


app.enable('case sensitive routing');
app.disable('case sensitive routing');

app.get('/about',  (req, res)=> {
    res.send('About homepage')
  })

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


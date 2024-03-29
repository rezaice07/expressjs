const express=require('express');
const app=express();

app.delete('/',  (req, res)=> {
    res.send('DELETE request to homepage')
  })

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
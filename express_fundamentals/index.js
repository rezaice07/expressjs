const express=require('express');
const app=express();

app.delete('/',  (req, res)=> {
    res.send('DELETE request to homepage')
  })

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


//https://www.youtube.com/watch?v=5q3NeKhhLQ0&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=17&ab_channel=LearnwithSumit-LWS-Bangladesh
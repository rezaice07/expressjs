const express=require('express');
const app=express();

//render-and-headersent.js

app.set('view engine','ejs');


app.get('/product/:id/urlslug/:urlslug',(req,res)=>{
  //res.send('Product Detail');
  //we can't add send and end at the same time
  //res.end();

  res.json(
    [
      {id:1,name:'Bangladesh'},
      {id:2,name:'India'},
      {id:3,name:'Sri Lanka'},
      {id:4,name:'Pakistan'},
      {id:5,name:'USA'},
      {id:6,name:'Germany'},
      {id:7,name:'UK'},
    ]
  )
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


/*
send-end-json
------------------------
Step -01: 
--------
if we send response as json  then the the client will get the json object with the header of application/json for content-type

Step 02:
----------
Finally run the above developed code

*/


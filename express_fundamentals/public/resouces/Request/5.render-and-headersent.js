const express=require('express');
const app=express();

//render-and-headersent.js

app.set('view engine','ejs');


app.get('/product/:id/urlslug/:urlslug',(req,res)=>{
  console.log(res.headersSent);
  res.render('pages/product-detail',{
    id:req.params.id,
    urlslug:req.params.urlslug
  });
  console.log(res.headersSent);
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})


/*
render locals
------------------------
Step -01: 
--------
install ejs
cli: npm i ejs

Step 02:
-------------
create a ffile views/pages/product-detail.ejs

Step 03:
----------


Finally run the above developed code




References:
-----------
http://expressjs.com/en/4x/api.html#res.render

*/


const express=require('express');
const app=express();

app.set('view engine','ejs');


app.get('/product/:id/urlslug/:urlslug',(req,res)=>{
  res.render('pages/product-detail',{
    id:req.params.id,
    urlslug:req.params.urlslug
  });
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

//https://www.youtube.com/watch?v=sA5Hno7n01g&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=20&ab_channel=LearnwithSumit-LWS-Bangladesh
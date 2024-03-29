const express=require('express');
const app=express();

//app.use(express.json()); //application/json
//app.use(express.raw());
//app.use(express.text());
//app.use(express.urlencoded()); 
// app.use(express.static(`${__dirname}/public`,{
//     index:'dashboard.html'
// }))
//base_url/root
//base_url/root/dashboard.html

const router=express.Router({
    caseSensitive:true
})
app.use(router);


//for get request
router.get('/home',(req,res)=>{
    res.send('This is home page with get request');
})


//for post request
router.post('/form',(req,res)=>{
    console.log(req.body);
    res.send('This is form page with post request');
})

//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
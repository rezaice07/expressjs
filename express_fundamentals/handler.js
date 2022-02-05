const handler=(req,res)=>{
    console.log(req.app.locals.title);
    res.send('This is home page with get request');
}

module.exports=handler;
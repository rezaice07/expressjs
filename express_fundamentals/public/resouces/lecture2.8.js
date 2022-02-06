const express=require('express');
const app=express();

//installation of ejs
// npm i ejs 

app.set('view engine','ejs');
//set method for ejs view engine 

app.route('/event')
.get((req,res)=>{    
  res.render('event/list');
  //here render instead of send
})
.post((req,res)=>{    
  res.send('This is event page with Post request');
})
.put((req,res)=>{    
  res.send('This is event page with put request');
})
.delete((req,res)=>{    
  res.send('This is event page with Delete request');
});


//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
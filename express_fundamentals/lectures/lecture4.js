const express = require('express');
const app = express();
app.set('view engine','ejs');

app.route('/event').get((req,res)=>{    
  res.render('event/list');
  //here render instead of send
});
app.get('/contactus',(req,res)=>{
  console.log(`${res.headersSent}`);
  res.render('pages/contactus',{
    name:'Junainah Yousra Roha',
    email:'roha@gmail.com',
    address:'Rangpur, Dhaka, Bangladesh'
  }); 
  
  res.end();
  //console.log(`${res.headersSent}`);
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})

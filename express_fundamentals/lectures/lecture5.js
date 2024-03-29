const express = require('express');
const app = express();
app.set('view engine','ejs');

app.route('/event').get((req,res)=>{    
  res.render('event/list');
  //here render instead of send
});
app.get('/contactus',(req,res)=>{
  
  let jsonData={
    name:'Diana',
    address:'Youtube'
  };

  res.json(jsonData);  
  res.end();

  //send status and end by one statement is
  //res.sendStatus(404);
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})

const express = require('express');
const app = express();


app.get('/product/:id/urlslug/:urlslug', (req, res) => {

  res.format({
    'text/plain':()=>{
      res.send('HI from text/plain');
    },
    'text/html':()=>{
      res.send('HI from text/html');
    },
    'application/json':()=>{
      res.send('HI from application/json');
    },
    default:()=>{
      res.send('HI from not acceptable');
    }
  });
  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
8.format.js
------------------------
Step -01: 
--------
Format will work on accept header. If we have accepts as * then any one format will be workable.
If we set accept as applicaiton/json then application/json will work

Step 02:
----------
Finally run the above developed code


*/

const express = require('express');
const app = express();



app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.set('SET_KEY','res.set value');
  console.log(res.get('SET::KEY'));
  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
12.res.set-res.get.js
------------------------
Step -01: 
--------
res.set that will set value and will get that one in header information

Step 02:
----------
Finally run the above developed code


*/

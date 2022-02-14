const express = require('express');
const app = express();


app.get('/channel/play_with_code',(req, res) => {
  res.send('from /channel/play_with_code')
  res.end();
})

app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.redirect('/channel/play_with_code');
  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
11.res.redirect.js
------------------------
Step -01: 
--------
res.redirect is noting, but if it is need to redirect from route to another
, this is very useful.

Step 02:
----------
Finally run the above developed code


*/

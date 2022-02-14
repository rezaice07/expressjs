const express = require('express');
const app = express();


app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.location('/channel/play_with_code');
  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
10.res.location.js
------------------------
Step -01: 
--------
location will send a header information for location in response header

Step 02:
----------
Finally run the above developed code


*/

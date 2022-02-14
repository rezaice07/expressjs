const express = require('express');
const app = express();


app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  res.cookie('cookie_name','play_with_code');
  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
9.res.cookie.js
------------------------
Step -01: 
--------
Cookie will send a cookie to client that was set from response(res)

Step 02:
----------
Finally run the above developed code


*/

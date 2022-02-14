const express = require('express');
const app = express();

//render-and-headersent.js

app.set('view engine', 'ejs');


app.get('/product/:id/urlslug/:urlslug', (req, res) => {
  // res.status(200);
  //  res.sendStatus(200); //OK
  //res.sendStatus(404); //Not found
  //res.sendStatus(400); //bad request
  res.sendStatus(500); //internal server error

  res.end();
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
7.various-status-code.js
------------------------
Step -01: 
--------
if we send response as status or sendstatus(_your_status_value)  then the the client will get the status wise response

Step 02:
----------
Finally run the above developed code


*/

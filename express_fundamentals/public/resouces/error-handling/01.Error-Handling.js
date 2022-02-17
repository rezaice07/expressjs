const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.send('This is about page')
});

//404
app.use((req, res, next) => {
    res.status(404).send('Resource not found');
})


app.use((err, req, res, next) => {
  if (err.message) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
  else {
    res.status(500).send("Error on server side");

  }
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
01.Error-Handling.js
------------------------
Step -01: 
--------
check response of a request in admin router by changing value at 
loggerWrapper({ log: true }) or loggerWrapper({ log: false })

Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=SAZU6-Ucrno&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=21&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

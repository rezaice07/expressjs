const express = require('express');
const app = express();

const adminRoute=express.Router();
adminRoute.get('/dashboard',(req,res)=>{
  //host name
  console.log(`hostname url: ${req.hostname}`);
  //baseurl
  console.log(`base url: ${req.baseUrl}`);
  //originalurl
  console.log(`original url: ${req.originalUrl}`);
  res.send('this is admin dasbboard');
})

app.use('/admin',adminRoute);

app.get('/user/:id', (req, res) => {
  //params
  console.log(req.params.id);
  //query
  console.log(req.query);

  res.send('This is user page');
});

app.post('/user', (req, res) => {
  //params
  console.log(req.body);

  res.send('This is user page');
});


//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})

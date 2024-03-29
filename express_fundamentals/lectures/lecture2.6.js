const express = require('express');
const app = express();

//use of param
app.param('id', (req, rew, next, pValue) => {
 
  const id=pValue;

  const customerInfo = {
    id: id,   
    firstName: 'Rejwanul',
    lastName: 'Reja'
  }

  req.customerInfo = customerInfo; 
  next();
});


app.get('/customer/:id', (req, res) => {
  console.log(req.customerInfo);  
  res.send('Customer homepage')
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


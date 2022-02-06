const express = require('express');
const app = express();

//use of param
app.param(['id', 'urlSlug'], (req, rew, next, pValue,pName) => {
 
  let cParams=pValue.split(' ')
  console.log(cParams);
  //console.log(pName); 

  const id= cParams[0];
  const urlSlug=cParams[1];

  const customerInfo = {
    id: id,
    urlSlug:urlSlug,
    firstName: 'Rejwanul',
    lastName: 'Reja'
  }

  req.customerInfo = customerInfo;
  req.body = { email: 'rezaice07@gmail.com' };
  next();
});




app.get('/customer/:id/detail/:urlSlug', (req, res) => {
  console.log(req.customerInfo);
  //console.log(req.body);
  //console.log(req.params);
  res.send('Customer homepage')
})

//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


const express = require('express');
const app = express();
const multer = require('multer');


//to configure file upload folder
const UPLOAD_FOLDER = './webshared/uploads';

//prepare the final multer upload object
let upload = multer({
  dest: UPLOAD_FOLDER,
  limits:{
    fileSize:100000, //1MB
  },
  fileFilter:(req,res,cb)=>{
    if(
      
    )
  }
});

app.post('/profile/upload', upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'signature', signature: 1 }
]), (req, res) => {
  res.send("Upload Completed");
  console.log('Completed')
  res.end();
})


app.get('/about', (req, res) => {
  res.send('This is about page')
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  }
  res.status(500).send('Error on server side');
  //res.end();
})


//listiner
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})


/*
01.fileupload.js
------------------------
Installation:
cli: npm i multer

Separate Server Creation:
In any directory, index.html that will run on node server.
cli: npx http-server

Options:
For single file uplaod, use upload.single('profilePhoto'), here profilePhoto name of the file

For multiple file upload, use upload.array('profilePhoto',2). here profilePhoto name of the file and 2 means no of file



Step 02:
----------
Finally run the above developed code

https://www.youtube.com/watch?v=SAZU6-Ucrno&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=21&ab_channel=LearnwithSumit-LWS-Bangladesh
*/

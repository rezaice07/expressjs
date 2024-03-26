const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');


//to configure file upload folder
const UPLOAD_FOLDER = './webshared/uploads';

//define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName = file.originalname.replace(fileExt, '')
      .toLowerCase()
      .split(' ')
      .join('-') + '-' + Date.now();

    cb(null, fileName + '.' + fileExt);
  },
})

//prepare the final multer upload object
let upload = multer({
  //dest: UPLOAD_FOLDER,
  storage: storage,
  limits: {
    fileSize: 10000000, //1MB
  },
  fileFilter: (req, file, cb) => {

    console.log(file)
    if (file.fieldname === 'profilePhoto') {
      if (file.mimetype === 'image/png') {
        cb(null, true);
      }
      else {
        cb(new Error('Only .jpg, .png or jpeg format allowed!'))
      }
    }
    else if (file.fieldname === 'signature') {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      }
      else {
        cb(new Error('Only .pdf format allowed!'));
      }
    }
    else {
      cb(new Error('Unknown file!'));
    }
  }
});

app.post('/profile/upload', upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'signature', maxCount: 1 }
]), (req, res) => {
  
  console.log(req.files);  
  res.send("Upload Completed");
  //console.log('Completed');
  res.end();
})


app.get('/about', (req, res) => {
  res.send('This is about page')
});

app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send('There was an upload error');
    }
    else {
      res.status(500).send(err.message);
    }
  }
  else {
    res.status(200).send('Success');
    //res.end();
  }
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

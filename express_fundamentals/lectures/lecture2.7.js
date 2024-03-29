
const express=require('express');
const app=express();


// app.get('/event',(req,res)=>{    
//     res.send('This is event page with get request');
// })

// app.post('/event',(req,res)=>{    
//     res.send('This is event page with post request');
// })

// app.put('/event',(req,res)=>{    
//     res.send('This is event page with put request');
// })

// app.delete('/event',(req,res)=>{    
//     res.send('This is event page with delete request');
// })

app.route('/event')
.get((req,res)=>{    
  res.send('This is event page with get request');
})
.post((req,res)=>{    
  res.send('This is event page with Post request');
})
.put((req,res)=>{    
  res.send('This is event page with put request');
})
.delete((req,res)=>{    
  res.send('This is event page with Delete request');
});


//listiner
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
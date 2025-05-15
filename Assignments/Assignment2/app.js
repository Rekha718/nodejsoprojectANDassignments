const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//     console.log('First middleware')
//     next()
// })

// app.use((req,res,next)=>{
//     console.log('Second middleware')
//     res.send('<p>Second middleware</p>')
// })
app.use('/user',(req,res,next)=>{
    console.log('Second middleware')
    res.send('<p>middleware of just /user</p>')
})

app.use('/',(req,res,next)=>{
    console.log('First middleware')
    res.send('<p>middleware of just /</p>')
})



app.listen(3000)

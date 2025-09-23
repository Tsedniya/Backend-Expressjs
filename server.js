const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res) =>{
    console.log('no it ',req.method)
    res.sendStatus(201)
})

app.get('/auth',(req,res) =>{
    console.log('yes  auth',)
    res.send('by')
})
app.listen(PORT,()=> console.log(`server started ${PORT}`))
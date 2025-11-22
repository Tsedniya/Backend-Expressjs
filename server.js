const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('<h1>Home</h1>')
})


app.get('/dashboard', (req, res)=>{
    res.send('<h1>dashboard</h1>')
})

app.listen(PORT,()=> console.log(`server started ${PORT}`))
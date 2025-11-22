const express = require('express')
const app = express()
const PORT = 3000

let data = {
    name:"tutu"
}

app.get('/', (req, res)=>{
    res.send('<h1>Home</h1>')
})


app.get('/dashboard', (req, res)=>{
    res.send('<h1>dashboard</h1>')
})

app.get('/api/data',(req,res)=>{
    console.log('this one was for data')
    res.send(data)
})

app.listen(PORT,()=> console.log(`server started ${PORT}`))
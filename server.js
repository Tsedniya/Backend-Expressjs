const express = require('express')
const app = express()
const PORT = 3000

let data = ["james"]

app.use(express.json())

app.get('/', (req, res)=>{
    res.send(` 
        <body>
           <a href="/dashboard">Dashboard</a>
        </body>`)
})


app.get('/dashboard', (req, res)=>{
    res.send(`
        <body>
          <a href="/"><h1>Home</h1></a>
        </body>`)
})

app.get('/api/data', (req, res) => {
    res.send(`
          <body style="background:white; color:blue;">
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `)
})
// only saved in memory

app.post('/api/data', (req,res)=>{
    const newEntery = req.body
    console.log(newEntery)
    data.push(
        newEntery.name,
        newEntery.friend
    )
    res.sendStatus(201)
})

app.delete('/api/data',(req,res)=>{
    data.pop()
    console.log('we delete a friend')
    res.sendStatus(203)
})


app.listen(PORT,()=> console.log(`server started ${PORT}`))




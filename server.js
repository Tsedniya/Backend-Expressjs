const express = require('express')
const app = express()
const PORT = 3000

let data = ["james"]

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('<h1>Home</h1>')
})


app.get('/dashboard', (req, res)=>{
    res.send('<h1>dashboard</h1>')
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


app.listen(PORT,()=> console.log(`server started ${PORT}`))
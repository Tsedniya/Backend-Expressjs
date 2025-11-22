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

app.get('/api/data', (req, res) => {
    res.send(`
        <body style="background:pink; color:blue;">
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `)
})


app.listen(PORT,()=> console.log(`server started ${PORT}`))
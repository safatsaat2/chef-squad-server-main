const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const chefs = require('./chef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
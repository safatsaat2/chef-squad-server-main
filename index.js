const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const chefs = require('./chef.json')
const recipes = require('./recipe.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
});
app.get('/chefs/:id',(req, res)=>{
  const id = req.params.id;
  const chefRecipe = recipes.filter(recipe=> recipe.chefId == id)
  res.send(chefRecipe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
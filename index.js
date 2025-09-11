const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Pedro burro!')
})

app.get('/users', (req, res) => {
  // json
  res.json({
    name: 'John',
    age: 30,
    city: 'New York'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

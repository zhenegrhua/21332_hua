const express = require('express')
const app = express()
const port = 3000

app.get('/user/info', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// specify start of page
app.get('/', (req, res) => {
  res.send({
    name: 'ruchika',
    likes: ['h', 'd']
  })
})
app.listen(process.env.PORT || 8081)

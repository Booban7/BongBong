const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Dababase'))

app.use(cors())
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)



app.listen(port, () => console.log('Server started on port', port))
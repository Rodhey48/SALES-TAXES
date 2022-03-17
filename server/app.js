if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// routers
const index = require('./routers/index')

// error handlers
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.use('/', index)

app.use(errorHandler)


app.listen(port, function () {
    console.log(`This app running on port ${port}`)
})
const express = require('express');
const router = require('./routers/carRouter')
const app = express()

const port = 3000

app.use(router)
app.use(express.json());

app.listen(port, () =>  {
    console.log('Ya estoy en marcha')
})


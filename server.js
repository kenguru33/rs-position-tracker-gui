const express = require('express')
const app = express()

app.use(express.static('dist'))
app.listen(80, () => console.log('listen on port 80'))

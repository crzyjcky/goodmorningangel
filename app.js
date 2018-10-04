const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () => console.log(`good-morning-angel server is listening on port ${port}`))

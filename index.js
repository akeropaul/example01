"use strict"
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World!')
})

let server = app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})

module.exports = server
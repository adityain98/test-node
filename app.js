const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};

app.get('/', (req, res) => {
  res.send('Hello World! from appjs 123123')
})

// https.createServer(options, app).listen(443);

var httpsServer = https.createServer(options, app)

httpsServer.listen(8443)
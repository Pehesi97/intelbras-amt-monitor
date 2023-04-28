const express = require('express')
const ws = require('ws')
const http = require('http')
const app = express()
const port = 9100

app.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.get('/', (req, res) => {
  console.log(req)
  console.log('Vai tomar no cu Túlio')
  res.sendStatus(200)
})

const server = http.createServer(app)
const wss = new ws.Server({ server })
wss.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log(`received message: ${message}`)
  })
})

server.listen(port, () => {
  console.log(`Intelbras fucking monitor listening on port ${port}`)
})

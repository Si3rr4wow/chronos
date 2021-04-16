import config from './config'
import express from 'express'

const app = express()
const port = config.PORT

app.get('/', (req, res) => {
  res.send('Configd bb')
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})
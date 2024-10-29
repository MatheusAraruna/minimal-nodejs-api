import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import 'express-async-errors'

import { routes } from './routes'

console.info('\x1b[32m%s\x1b[0m', 'Server is starting...')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const port = Number(process.env.PORT) || 3333

app.listen(port, () => {
  console.info('\x1b[32m%s\x1b[0m', `Server started on port ${port}.`)
})

import express from 'express'
import { indexRouter } from './routes/indexRouter'
const server = express()

server.use(express.json())
server.use(indexRouter)

server.listen(8000, () => console.log('Server is up!') )

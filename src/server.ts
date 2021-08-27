import 'reflect-metadata'; // reflect-metadata needs to be on the very top of the app's entrance
import express from 'express';
import { router } from './routes/router' ;

// Injection decorators (using tsyringe lib)
import "@src/injection-management/index"

const server = express()

server.use(express.json())
server.use(router)

server.listen(8000, () => console.log('Server is up!') )

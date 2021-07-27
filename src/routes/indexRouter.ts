import { HelloWorldController } from "@models/HelloWorldController";
import { Router } from "express";
// import { postRouter } from './postRouter'

const indexRouter = Router()

const testController = new HelloWorldController()

// indexRouter.use('/post', postRouter)
indexRouter.get('/test', testController.handler)


export { indexRouter }
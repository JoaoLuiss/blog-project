import { HelloWorldController } from "@models/hello-world/HelloWorldController";
import { Router } from "express";
import { postRouter } from './postRouter'


const router = Router()


router.use('/post', postRouter)



export { router }
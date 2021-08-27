import { CreatePostController } from '@models/post/use-cases/create-post/CreatePostController';
import Router from 'express';

const postRouter = Router()

const createPostController = new CreatePostController()

postRouter.post('/', createPostController.handle)

export { postRouter }
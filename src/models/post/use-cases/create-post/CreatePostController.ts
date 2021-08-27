import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { Post } from '../../entitie/Post'
import { CreatePostEvent } from './CreatePostEvent'

class CreatePostController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { title, textBody } = request.body
        const createPostEvent = container.resolve( CreatePostEvent )
        const post = createPostEvent.execute( { title, textBody } )
        
        return response.status(201).json(post)
    }
}

export { CreatePostController }
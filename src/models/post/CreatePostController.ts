import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreatePostEvent } from './CreatePostEvent'

class CreatePostController {
    private name: string
    constructor(name: string) { this.name = name}

    async handle(request: Request, response: Response): Promise<Response> {

        const { title, textBody } = request.body
        const createPostEvent = container.resolve( CreatePostEvent )
        const post = createPostEvent.execute( { title, textBody } )

        return response.status(201).json(post)
    }
}

export { CreatePostController }
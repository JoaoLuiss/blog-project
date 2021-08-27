import { Post } from "../../entitie/Post";
import { AppError } from '@src/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IPostRepository } from "../../InterfacesPost";

@injectable()
export class CreatePostEvent {

    constructor(
        @inject("PostRepository")
        private postRepository: IPostRepository) 
    {}

    async execute( { title, textBody } ):Promise<Post> {

        const titleAlreadyUsed = this.postRepository.findOneByTitle(title)
        if(titleAlreadyUsed){
            throw new AppError("Titulo já foi usado.", 422)
        }
        const post = this.postRepository.create( { title, textBody } )

        return post
    }
}
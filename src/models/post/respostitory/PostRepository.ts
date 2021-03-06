
import { Post } from '../entitie/Post'
import { Repository, getRepository } from 'typeorm'
import { singleton } from 'tsyringe'
import { IPostRepository } from '../InterfacesPost'

export class PostRepository implements IPostRepository {

    private postRepository: Repository<Post>

    constructor() {
        this.postRepository = getRepository(Post)
    }

    async create( { title, textBody } ): Promise<Post> {
        const newPost = this.postRepository.create( { title, textBody } )
        return newPost
    }

    async findOneByTitle(title: string):Promise<Post> {
        const post = this.postRepository
            .createQueryBuilder()
            .where('title = :title', {title})
            .getOne()
        return post
    }

}
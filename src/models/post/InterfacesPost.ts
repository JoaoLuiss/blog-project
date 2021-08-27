interface IPost {
    title: string
    textBody: string
    creationDate: Date
}

interface IPostRepository {
    create( { title, textBody } ): Promise<IPost>
    findOneByTitle(title: string):Promise<IPost>
}

export { IPost, IPostRepository, }
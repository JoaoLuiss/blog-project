import { v4 } from 'uuid'

export class Post {
    id?: string
    title: string
    textBody: string
    creationDate: Date

    constructor(){
        if(!this.id) {
            this.id = v4()
        }
    }
}
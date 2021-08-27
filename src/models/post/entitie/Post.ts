import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 } from 'uuid'
import { IPost } from '../InterfacesPost'

@Entity("posts")
export class Post implements IPost {
    
    @PrimaryColumn()
    id?: string

    @Column()
    title: string

    @Column()
    textBody: string
    
    @Column()
    creationDate: Date

    constructor(){
        if(!this.id) {
            this.id = v4()
        }
    }
}
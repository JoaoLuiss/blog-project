import { json } from "express"

export class Test {
    
    message: string = "Hello World!"
    from: string = "express"

    constructor() {
        this.method;
    }

    /**
     * method
    */
    public method() {
        console.log(`message: ${this.message}\nfrom: ${this.from}`)
    }

}
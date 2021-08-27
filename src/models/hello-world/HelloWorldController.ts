import { Request, Response } from "express";
import { Test } from "./HelloWorld";

export class HelloWorldController {
    
    handler(request: Request, response: Response): Response {
        
        const test = new Test()

        return response.status(200).json(test)
    }
}


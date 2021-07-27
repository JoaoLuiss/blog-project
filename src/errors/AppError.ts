export class AppError extends Error {
    public readonly statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
        this.name = "AppError"
    }
}
import { Request, Response, NextFunction, response } from "express"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req

    const usersRepositories = getCustomRepository(UsersRepositories)

    const { admin } = await usersRepositories.findOne(user_id)


    if (admin) {
        return next()
    }

    return response.status(401).json({
        error: "User is not admin"
    })
}

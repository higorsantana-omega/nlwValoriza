import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"

class CreateUserController{
    async handle(request: Request, response: Response) {
        // Pegar informações do body
        const { name, email, admin, password } = request.body

        // Validar dados
        const createUserService = new CreateUserService()

        // esperar informação da operação de cima e executar
        const user = await createUserService.execute({ name, email, admin, password })
        
        // Retorna em json
        return response.json(user)
    }
}

export { CreateUserController }
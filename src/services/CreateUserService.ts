import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest{
    name: string
    email: string
    admin?: boolean
}

// Criação de usuario
class CreateUserService {

    async execute({ name, email, admin } : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories)

        // Se o email não vier
        if (!email) {
            throw new Error("Email incorrect")
        }

        // Pesquisar se email ja existe
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        // Erro caso usuario ja exista
        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        // Criar objeto
        const user = usersRepository.create({
            name,
            email,
            admin,
        })

        // Salvar
        await usersRepository.save(user)

        return user
    }
}

export { CreateUserService }
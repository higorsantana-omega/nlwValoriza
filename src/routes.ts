import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"

const router = Router()

const createUserController = new CreateUserController()

// Rota de usuario; instanciando o createUserController
router.post("/users", createUserController.handle)

export { router }
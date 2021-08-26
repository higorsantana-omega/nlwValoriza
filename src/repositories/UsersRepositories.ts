import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

// Repositorio da entidade user
@EntityRepository(User)
// extends -> nesse caso é usado para instanciar todos os metodos padroes
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };

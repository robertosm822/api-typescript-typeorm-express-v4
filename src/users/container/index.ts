import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUserController } from "../useCases/createUser/CreateUserController";

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton('CreateUserController', CreateUserController);

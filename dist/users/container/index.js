"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UsersRepository_1 = require("../repositories/UsersRepository");
const CreateUserController_1 = require("../useCases/createUser/CreateUserController");
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton('CreateUserController', CreateUserController_1.CreateUserController);
//# sourceMappingURL=index.js.map
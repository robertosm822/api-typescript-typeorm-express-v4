"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const tsyringe_1 = require("tsyringe");
class CreateUserController {
    async handle(request, response) {
        const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.CreateUserUseCase);
        const { name, email, password, isAdmin, roleId } = request.body;
        const user = await createUserUseCase.execute({
            name,
            email,
            password,
            isAdmin,
            roleId
        });
        return response.status(201).json(user);
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map
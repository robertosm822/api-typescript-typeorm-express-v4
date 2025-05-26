"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateRoleUseCase_1 = require("./CreateRoleUseCase");
class CreateRoleController {
    async handle(request, response) {
        const createRoleUseCase = tsyringe_1.container.resolve(CreateRoleUseCase_1.CreateRoleUseCase);
        const { name } = request.body;
        const role = await createRoleUseCase.execute({ name });
        return response.status(201).json(role);
    }
}
exports.CreateRoleController = CreateRoleController;
//# sourceMappingURL=CreateRoleController.js.map
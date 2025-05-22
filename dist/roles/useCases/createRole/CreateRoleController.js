"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleController = void 0;
class CreateRoleController {
    constructor(createRoleUseCase) {
        this.createRoleUseCase = createRoleUseCase;
    }
    async handle(request, response) {
        const { name } = request.body;
        const role = await this.createRoleUseCase.execute({ name });
        return response.status(201).json(role);
    }
}
exports.CreateRoleController = CreateRoleController;
//# sourceMappingURL=CreateRoleController.js.map
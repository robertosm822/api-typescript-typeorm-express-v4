"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleController = void 0;
class UpdateRoleController {
    constructor(updateRoleUseCase) {
        this.updateRoleUseCase = updateRoleUseCase;
    }
    async handle(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const role = await this.updateRoleUseCase.execute({ id, name });
        return response.status(200).json(role);
    }
}
exports.UpdateRoleController = UpdateRoleController;
//# sourceMappingURL=UpdateRoleController.js.map
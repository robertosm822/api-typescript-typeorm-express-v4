"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateRoleUseCase_1 = require("./UpdateRoleUseCase");
class UpdateRoleController {
    async handle(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        const updateRoleUseCase = tsyringe_1.container.resolve(UpdateRoleUseCase_1.UpdateRoleUseCase);
        const role = await updateRoleUseCase.execute({ id, name });
        return response.status(200).json(role);
    }
}
exports.UpdateRoleController = UpdateRoleController;
//# sourceMappingURL=UpdateRoleController.js.map
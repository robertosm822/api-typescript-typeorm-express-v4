"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoleController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteRoleUseCase_1 = require("./DeleteRoleUseCase");
class DeleteRoleController {
    async handle(request, response) {
        const { id } = request.params;
        const deleteRoleUseCase = tsyringe_1.container.resolve(DeleteRoleUseCase_1.DeleteRoleUseCase);
        await deleteRoleUseCase.execute({ id });
        return response.status(204).json({});
    }
}
exports.DeleteRoleController = DeleteRoleController;
//# sourceMappingURL=DeleteRoleController.js.map
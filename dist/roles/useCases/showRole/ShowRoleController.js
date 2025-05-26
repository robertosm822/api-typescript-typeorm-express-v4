"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowRoleController = void 0;
const ShowRoleUseCase_1 = require("./ShowRoleUseCase");
const tsyringe_1 = require("tsyringe");
class ShowRoleController {
    async handle(request, response) {
        const showRoleUseCase = tsyringe_1.container.resolve(ShowRoleUseCase_1.ShowRoleUseCase);
        const { id } = request.params;
        const role = await showRoleUseCase.execute({ id });
        return response.status(200).json(role);
    }
}
exports.ShowRoleController = ShowRoleController;
//# sourceMappingURL=ShowRoleController.js.map
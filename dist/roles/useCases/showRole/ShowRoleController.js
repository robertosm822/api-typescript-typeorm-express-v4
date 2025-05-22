"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowRoleController = void 0;
class ShowRoleController {
    constructor(showRoleUseCase) {
        this.showRoleUseCase = showRoleUseCase;
    }
    async handle(request, response) {
        const { id } = request.params;
        const role = await this.showRoleUseCase.execute({ id });
        return response.status(200).json(role);
    }
}
exports.ShowRoleController = ShowRoleController;
//# sourceMappingURL=ShowRoleController.js.map
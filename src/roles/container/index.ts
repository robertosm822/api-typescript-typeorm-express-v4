import { container } from "tsyringe";
import { IRolesRepository } from "../repositories/IRolesRepository";
import { RolesRepository } from "../repositories/RolesRepository";
import { CreateRoleController } from "../useCases/createRole/CreateRoleController";
import { ListRolesController } from "../useCases/listRoles/ListRolesController";
import { ShowRoleController } from "../useCases/showRole/ShowRoleController";
import { UpdateRoleController } from "../useCases/updateRole/UpdateRoleController";
import { DeleteRoleController } from "../useCases/deleteRole/DeleteRoleController";

container.registerSingleton<IRolesRepository>('RolesRepository', RolesRepository);

container.registerSingleton('CreateRoleController', CreateRoleController);
container.registerSingleton('ListRolesController', ListRolesController);
container.registerSingleton('ShowRoleController', ShowRoleController);
container.registerSingleton('UpdateRoleController', UpdateRoleController);
container.registerSingleton('DeleteRoleController', DeleteRoleController);

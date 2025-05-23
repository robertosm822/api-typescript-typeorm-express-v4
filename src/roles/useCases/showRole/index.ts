
import { RolesRepository } from '@/roles/repositories/RolesRepository'
import { ShowRoleController } from './ShowRoleController'
import { ShowRoleUseCase } from './ShowRoleUseCase'

const rolesRepository = RolesRepository.getIntance()
const showRoleUseCase = new ShowRoleUseCase(rolesRepository)
export const showRolesController = new ShowRoleController(showRoleUseCase)

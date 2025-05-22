
import { RolesRepository } from '@/roles/repositories/RolesRepository'
import { UpdateRoleController } from './UpdateRoleController'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'

const rolesRepository = RolesRepository.getIntance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const updateRolesController = new UpdateRoleController(updateRoleUseCase)

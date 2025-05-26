import { DataSource } from 'typeorm'
import { CreateRolesTable1747924088667 } from './migrations/1747924088667-CreateRolesTable'
import { Role } from '../../roles/entities/Role'
import { CreateUsersTable1748283713791 } from './migrations/1748283713791-CreateUsersTable'
import { AddRoleIdToUsersTable1657997456404 } from './migrations/1657997456404-AddRoleIdToUsersTable'
import { User } from '@/users/entities/User'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1747924088667,
    CreateUsersTable1748283713791,
    AddRoleIdToUsersTable1657997456404
  ],
})

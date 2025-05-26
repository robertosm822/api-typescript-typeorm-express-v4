import { Repository } from 'typeorm'
import { Role } from '../entities/Role'
import { dataSource } from '@/shared/typeorm'
import { CreateRleDTO, IRolesRepository, PaginateParams, RolesPaginateProperties } from './IRolesRepository'

export class RolesRepository implements IRolesRepository {
  private repository: Repository<Role>

  // para garantir que sera usado em mais nenhum lugar a instancia de new desta classe usa-se o private
  constructor() {
    this.repository = dataSource.getRepository(Role)
  }

  /**
   * Metodo no padrao singleton

  public static getIntance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }
    return RolesRepository.INSTANCE
  }
  */

  async create({ name }: CreateRleDTO): Promise<Role> {
    const role = this.repository.create({ name })
    return this.repository.save(role);
  }

  async save(role: Role): Promise<Role> {
    return this.repository.save(role);
  }

  async delete(role: Role): Promise<void> {
    await await this.repository.remove(role);
  }

  async findAll({page, skip, take}: PaginateParams): Promise<RolesPaginateProperties> {
    const [roles, count] = await this.repository.createQueryBuilder()
                      .skip(skip)
                      .take(take)
                      .getManyAndCount();
    return {
      per_page: take,
      total: count,
      current_page: page,
      data: roles,
    }
  }

  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({name});
  }

   async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({id});
  }
}

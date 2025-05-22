import { Repository } from 'typeorm'
import { Role } from '../entities/Role'
import { dataSource } from '@/shared/typeorm'

type CreateRleDTO = {
  name: string
}

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
}

export type RolesPaginateProperties = {
  per_page: number;
  total: number;
  current_page: number;
  data: Role[];
}

export class RolesRepository {
  private repository: Repository<Role>
  private static INSTANCE: RolesRepository

  // para garantir que sera usado em mais nenhum lugar a instancia de new desta classe usa-se o private
  private constructor() {
    this.repository = dataSource.getRepository(Role)
  }

  /**
   * Metodo no padrao singleton
   */
  public static getIntance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }
    return RolesRepository.INSTANCE
  }

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

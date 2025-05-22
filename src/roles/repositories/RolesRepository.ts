import { Role } from '../entities/Role';

type CreateRleDTO = {
  name: string
}

export class RolesRepository {
  private roles: Role[] = [];
  private static INSTANCE: RolesRepository;

  // para garantir que sera usado em mais nenhum lugar a instancia de new desta classe usa-se o private
  private constructor() {
    this.roles = [];
  }

  /**
   * Metodo no padrao singleton
  */
  public static getIntance(): RolesRepository {
    if(!RolesRepository.INSTANCE){
      RolesRepository.INSTANCE = new RolesRepository();
    }
    return RolesRepository.INSTANCE;
  }

  create({ name }: CreateRleDTO): Role {
    const role = new Role();
    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role)

    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name === name);
  }
}

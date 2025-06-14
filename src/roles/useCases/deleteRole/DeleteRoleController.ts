import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteRoleUseCase } from './DeleteRoleUseCase';


export class DeleteRoleController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteRoleUseCase = container.resolve(DeleteRoleUseCase);
    await deleteRoleUseCase.execute({ id });

    return response.status(204).json({});
  }
}

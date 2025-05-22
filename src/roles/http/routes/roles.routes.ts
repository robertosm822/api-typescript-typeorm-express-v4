import { createRolesController } from '@/roles/useCases/createRole';
import { deleteRolesController } from '@/roles/useCases/deleteRole';
import { listRolesController } from '@/roles/useCases/listRoles';
import { showRolesController } from '@/roles/useCases/showRole';
import { updateRolesController } from '@/roles/useCases/updateRole';
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

const rolesRouter = Router();

/* @ts-ignore */
rolesRouter.get('/roles', (request, response) => {

  return listRolesController.handle(request, response);
});


rolesRouter.get('/roles/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
  /* @ts-ignore */
}),(request, response) => {
  return showRolesController.handle(request, response);
});


rolesRouter.post('/roles',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
  /* @ts-ignore */
}), (request, response) => {
  return createRolesController.handle(request, response);
});


rolesRouter.put('/roles/:id',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
}),celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
  /* @ts-ignore */
}), (request, response) => {
  return updateRolesController.handle(request, response);
});

/* @ts-ignore */
rolesRouter.delete('/roles/:id',  celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
  /* @ts-ignore */
}),(request, response) => {
  return deleteRolesController.handle(request, response);
});

export { rolesRouter }

import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

// import AppError from '@shared/errors/AppError';
// import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;

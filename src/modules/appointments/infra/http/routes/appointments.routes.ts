import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

// import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated); // esse midleware vai ser aplicado em todas as rotas de agendamento

// a rota somente está preocupada em:
// chamar a requisição, chamar outro arquivo, devolver uma resposta

// appointmentsRouter.get('/', async (request, response) => {

//  const appointments = await appointmentsRepository.find();

//  return response.json(appointments);
// });

// POST http://localhost:3333/appointments
// provider = barbeiro
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;

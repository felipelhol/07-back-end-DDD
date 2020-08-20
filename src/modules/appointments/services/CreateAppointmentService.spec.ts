import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '111',
      // user_id: '1111',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('111');
  });

  // it('should not be able to create two appointments on the same time', () => {
  //   expect();
  // });
});

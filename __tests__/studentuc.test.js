import { validateUser } from '../usecases/userTest.js';

describe('studentuc', () => {
  it('Check if usecase is working', async () => {
    const validUser = {
      firstName: 'Larss',
      lastName: 'Binge',
      address: 'Avenyn'
    };
    const user = validateUser(validUser);
    expect(user).toMatchObject(validUser);
  });
});

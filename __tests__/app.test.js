import request from 'supertest';
import createApp from '../index.js';
import { createMockDb } from '../dbConnection.js';

const mockData = [
  { name: 'Patrik', age: 38 },
  { name: 'Petter', age: 41 },
  { name: 'Pontus', age: 12 },
  { name: 'Per', age: 57 }
];

describe('/users endpoints', () => {
  it('GET /users should get some users', async () => {
    const mockDb = createMockDb(mockData);
    const app = await createApp(mockDb);
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        { _id: 0, name: 'Patrik', age: 38 },
        { _id: 1, name: 'Petter', age: 41 },
        { _id: 2, name: 'Pontus', age: 12 },
        { _id: 3, name: 'Per', age: 57 }
      ])
    );
  });
});

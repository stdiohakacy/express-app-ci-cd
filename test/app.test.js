const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('GET / - should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Express API');
  });

  test('GET /health - should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
  });
});
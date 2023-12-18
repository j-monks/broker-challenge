import db from '../../models/index.js';
import request from 'supertest';
import server from '../../app.js';


// Establish database connection before running tests
beforeAll(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Sync models to create tables
    await db.sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

// Close database connection after all tests are done
afterAll(async () => {
  await db.sequelize.close();
});

jest.useRealTimers();

describe('Upload CSV Endpoint', () => {
  it('should upload a CSV 1 file and process it', async () => {
    const filePath = '/data/broker1.csv';
    // Make a POST request to the endpoint with the CSV file
    const response = await request(server)
      .post('/api/policies/upload')
      .attach('file', __dirname + filePath);

    // console.log(response.body.parsedData);
    expect(response.status).toBe(200);
  });
  
  it('should upload a CSV 2 file and process it', async () => {
    const filePath = '/data/broker2.csv';
    // Make a POST request to the endpoint with the CSV file
    const response = await request(server)
      .post('/api/policies/upload')
      .attach('file', __dirname + filePath);

    // console.log(response.body.parsedData);
    expect(response.status).toBe(200);
  });
});

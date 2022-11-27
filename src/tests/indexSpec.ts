import sharp from 'sharp';
import supertest from 'supertest';
import app from '../index';
import data from '../utils/data';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/photo?url=11.jpg');
    expect(response.status).toBe(200);
  });
});

const request_2 = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request_2.get('/');
    expect(response.status).toBe(200);
  });
});

const request_3 = supertest(app);
describe('Expected bad request from user', () => {
  it('Throwing error for bad request', async () => {
    const response = await request_3.get('/resize');
    expect(response.status).toBe(400);
  });
});

const request_4 = supertest(app);
describe('Test endpoint responses', () => {
  it('Good request on resize api', async () => {
    const response = await request_4.get('/resize?url=11.jpg');
    expect(response.status).toBe(200);
  });
});

const request_5 = supertest(app);
describe('Test endpoint responses', () => {
  it('Testing post endpoint', async () => {
    const response = await request_5.post('/photo');
    expect(response.status).toBe(200);
  });
});

it('should Contain 11.jpg', () => {
  expect(data.includes('11.jpg')).toEqual(true);
});

it('Image processing with sharp', () => {
  expect(async () => {
    await sharp('/images/11.jpg').resize(500, 500);
  }).not.toThrow();
});

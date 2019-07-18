const { expect } = require('chai');
const supertest = require('supertest');

const app = require('../app');

describe('GET /', () =>{
  it('should return 200 "Hello, world!', () =>{
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, world');
  });
});

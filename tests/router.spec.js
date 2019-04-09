import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'assert'
import router from '../routes/';
import request from 'supertest';

chai.use(chaiHttp);



describe('index page should render 200 request', () => {
  it('should get index 200', (done) => {     
    request(router)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
      
  });
})

describe('index page should index message', () => {
  it('should get index messsage', (done) => {     
    request(router)
      .get('/')
      .send({
        'message': 'hello world',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
    
      .expect(200, {
        message: "Hello World"
      }, done)
     
     
      
  });
})



describe('index page should render 400 error', () => {
  it('should get 404 error 400', (done) => {     
    request(router)
      .get('/404')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
      
  });
})
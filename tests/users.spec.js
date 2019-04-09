import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'assert'
import users from '../routes/users';
import request from 'supertest';


describe('Should GET USERS API 200', () =>{
    it('Should GET USER API 200', (done)=> {
        request(users)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    });
})

describe('users page should render Hello Users ', () => {
    it('users page should render Hello Users', (done) => {     
      request(users)
        .get('/')
        .send({
          'message': 'Hello Users',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          message: "Hello Users"
        }, done)
    });
  })


describe('Should GET USERS Queries', () =>{
    it('Should GET USER Queries', (done)=> {
        request(users)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    });
})
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'assert'
import users from '../routes/users';
import request from 'supertest';


describe('Should GET USERS', () =>{
    it('Should GET USERS', (done)=> {
        request(users)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    });
})
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'assert'
import router from '../routes/';
import request from 'supertest';

chai.use(chaiHttp);


// simple test
// describe('Array', () => {
//       it('should return -1 when the value is not present', () => {
//         assert.equal([1, 2, 3].indexOf(4), -1);
//       });
// });



describe('index page should render 200 request', () => {
  it('should get index 200', () => {     
    request(router)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
    });  
})
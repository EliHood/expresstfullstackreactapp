import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'assert'
import router from '../routes/';

chai.use(chaiHttp);


// simple test
// describe('Array', () => {
//       it('should return -1 when the value is not present', () => {
//         assert.equal([1, 2, 3].indexOf(4), -1);
//       });
// });



describe('index page should render, hello world', () => {
it('should render hello world 200', () => {     
  return chai.request(router)
   .get('/user')
   .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.length.should.be.eql(0);
     done();
   });
 });   
})
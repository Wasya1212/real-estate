import request from 'supertest'

import app from '../src/index'

it('GET / - should return hello world', (done) => {
  request(app).get('/').expect('hello world').end(done)
})

it('POST / - should return hello world', (done) => {
  request(app).post('/').expect({ result: 'hello world' }).end(done)
})

process.env.NODE_ENV = 'test'

const app = require('../lib/app')
const request = require('supertest')

describe('GET /', () => {
    test('It should get a valid response', done => {
        return request(app)
            .get('/')
            .then((res : Response) => {
                expect(res.status).toBe(200);
                done();
            })
    })
})
const request = require('supertest')
const app = require('../src/server/index')

describe('Get Endpoints', () => {
    it('/', async () => {
        const res = await request(app).get('/')       
        expect(res.status).toEqual(200)       
    })

   it('/test', async () => {
    const res = await request(app).get('/test')
    expect(res.status).toEqual(200)
    expect(res.body.message).toBe('pass!')
})
})



const app = require("./server")
const supertest = require('supertest');
const request = supertest(app)

describe('Test node module', () => {
    it('it should be return a response', async () => {
        const response = await request.get('/api-health')
        expect(response.status).toBe(200);
        expect(response.text).toBe("Everything is working fine")

    });
});

const app = require("./server")
const supertest = require('supertest');
const request = supertest(app)

describe('Test node module', () => {
    it('it should be return a response', () => {
        const response = request.get('/api-health')
        expect(response.status).toBe(200);
        expect(response.text).toBe("Everything is working fine!")

    });

    it('it should be return a response', () => {
        const response = request.post('/get-data')
        expect(response.status).toBe(200);
        expect(response.text).toBe("User data")

    });
});

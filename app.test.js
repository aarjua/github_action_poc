const { app, server } = require("./server")
const supertest = require('supertest');
const request = supertest(app)

describe('Test node module', () => {
    afterAll(() => {
        server.close(); // Close the server to release resources
    });

    it('it should be return a response', async () => {
        const response = await request.get('/api-health')
        expect(response.status).toBe(200);
        expect(response.text).toBe("Everything is working fine!")

    });

    it('it should be return a response', async () => {
        const response = await request.post('/get-data')
        expect(response.status).toBe(200);
        expect(response.text).toBe("User data")

    });
});

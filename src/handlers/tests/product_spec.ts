import app from '../../server';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';

const request = supertest(app);

const secret = process.env.token_secret as string;
const token = jwt.sign({iss: 'tester'}, secret);

describe('Tests for product handlers', () => {

    it('tests the (get products) handler', async (done) => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
        done();
    });

    it('tests getting product by id handler', async (done) => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
        done();
    });

    it('tests creating a new product', async (done) => {
        const response = await request.post('/products').send({name: 'test', price: 2}).auth(token, {type: 'bearer'});
        expect(response.status).toBe(200);
        done();
    });

});
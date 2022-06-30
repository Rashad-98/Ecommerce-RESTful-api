import app from '../../server';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';

const request = supertest(app);

const secret = process.env.token_secret as string;
const token = jwt.sign({iss: 'tester'}, secret);

describe('Test for order handlers', () => {

    it('tests the (get order by user id) handler', async (done) => {
        const response = await request.get('/orders/2').auth(token , {type: 'bearer'});
        expect(response.status).toBe(200);
        done();
    });

    it('tests getting the id of each product in the order',async (done) => {
        const response = await request.get('/orders/products-in-order/1').auth(token , {type: 'bearer'});
        expect(response.status).toBe(200);
        done();
    })

    it('tests getting the quantity of each product in the order', async (done) => {
        const response = await request.get('/orders/products-in-order-quantity/1').auth(token , {type: 'bearer'});
        expect(response.status).toBe(200);
        done();
    })

});
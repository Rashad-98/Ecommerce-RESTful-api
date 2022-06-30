import app from '../../server';
import supertest from 'supertest';
import jwt from 'jsonwebtoken';

const request = supertest(app);

const secret = process.env.token_secret as string;
const token = jwt.sign({iss: 'tester'}, secret);

describe('Test for user handlers', () => {

        it('tests the (get users) handler', async (done) => {
            const response = await request.get('/users').auth(token , {type: 'bearer'});
            expect(response.status).toBe(200);
            done();
        });

        it('tests getting user by id handler',async (done) => {
            const response = await request.get('/users/1').auth(token , {type: 'bearer'});
            expect(response.status).toBe(200);
            done();
        })

        it('tests creating a new user', async (done) => {
            const response = await request.post('/users').auth(token , {type: 'bearer'});
            expect(response.status).toBe(200);
            done();
        })

});
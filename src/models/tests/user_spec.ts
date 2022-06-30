import { User, UserStore } from "../user";

const store = new UserStore();
const user: User = {
    firstname: 'test',
    lastname: 'test',
    password: 'test'
}

describe('Tests for the user model', () => {
    
    it('sees if index method that returns a list of users is defined', async () => {
        const result = await store.index();
        expect(result).toBeDefined();
    });

    it('sees if show method that returns a specific user is defined', async () => {
        const result = await store.show(1);
        expect(result).toBeDefined();
    });

    it('sees if create method that creates a new user is defined', async () => {
        const result = await store.create(user);
        expect(result).toBeDefined();
    });

});
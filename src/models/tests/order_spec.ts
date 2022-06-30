import { Order, OrderStore } from "../order";

const store = new OrderStore();
const user: Order = {
    userId: 1,
    status: 'test',
}

describe('Tests for the order model', () => {

    it('sees if show method that returns a specific user\'s order is defined', async () => {
        const result = await store.show(1);
        expect(result).toBeDefined();
    });
    
    it('sees if idOfEachProductInTheOrder method that returns the id\'s of each product in the order is defined', async () => {
        const result = await store.idOfEachProductInTheOrder(1);
        expect(result).toBeDefined();
    });

    it('sees if quantityOfEachProductInTheOrder method that returns the quantity of each product in the order is defined', async () => {
        const result = await store.quantityOfEachProductInTheOrder(1);
        expect(result).toBeDefined();
    });

});
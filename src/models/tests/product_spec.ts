import { Product, ProductStore } from "../product";

const store = new ProductStore();
const product: Product = {
    name: 'test',
    price: 0
}

describe('Tests for the product model', () => {
    
    it('sees if index method that returns a list of products is defined', async () => {
        const result = await store.index();
        expect(result).toBeDefined();
    });

    it('sees if show method that returns a specific product is defined', async () => {
        const result = await store.show(1);
        expect(result).toBeDefined();
    });

    it('sees if create method that creates a new product is defined', async () => {
        const result = await store.create(product);
        expect(result).toBeDefined();
    });

});
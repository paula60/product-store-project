import { describe, expect, it } from 'vitest';
import { getProducts, getProduct } from './productsApi';

describe('productsApi', () => {
    it('returns all products', async () => {
        const products = await getProducts();

        expect(products).toBeInstanceOf(Array);
        expect(products.length).toBeGreaterThan(0);
    });

    it('returns a product when given a valid id', async () => {
        const products = await getProducts();
        const firstProduct = products[0];

        const product = await getProduct(firstProduct.id);
        expect(product).toEqual(firstProduct);
    });

    it('error when product does not exist', async () => {
        await expect(getProduct('invalid.id'))
            .rejects.toThrow('Product not found');
    });

})
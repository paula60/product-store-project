import products from '../data/products';

export function getProducts () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export function getProduct (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(
                (item) => item.id === id
            );
            if (!product) {
                return reject(new Error('Product not found'));
            }
            resolve(product);
        }, 500);
    });
}

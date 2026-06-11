import { useState, useEffect } from 'react';
import { getProducts } from '../api/productsApi';

export default function useProducts () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProducts () {
            setLoading(true);
            setError(null);
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    return {
        products,
        loading,
        error
    }
}

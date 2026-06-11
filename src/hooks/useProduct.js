import { useState, useEffect } from 'react';
import { getProduct } from '../api/productsApi';

export default function useProduct (id) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProduct () {
            setLoading(true);
            setError(null);
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadProduct();
    }, [id]);

    return {
        product,
        loading,
        error
    }
}

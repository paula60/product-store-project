import { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import StatusCard from '../components/StatusCard';
import Loading from '../components/Loading';

export default function ProductsPage () {

    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(8);

    const {
        products,
        loading,
        error,
    } = useProducts();

    const filteredProducts = products.filter(
        (product) =>
            product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    const hasMoreProducts = visibleCount < filteredProducts.length;

    useEffect(() => {
        setVisibleCount(8);
    }, [searchTerm]);

    if (loading) {
        return (
            <Loading message='Loading products...' />
        );
    };

    if (error) {
        return (
            <StatusCard
                title='Sorry, something went wrong'
                message='We are unable to load products, please try again later!'
            />
        );
    };

    if (!products.length) {
        return (
            <StatusCard
                title='No products available'
                message='Please come back later.'
            />
        );
    };

    return (
        <div className='bg-white mx-auto max-w-7xl pt-6 px-6'>
            <div className='mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                <div>
                    <h2 className='text-3xl font-semibold'>
                        Browse Products
                    </h2>
                    <p className='mt-4 text-slate-700'>
                        Explore our range of products and rewards
                    </p>
                </div>
                <div className='w-full sm:w-80'>
                    <label
                        htmlFor='search-bar'
                        className='sr-only'
                    >
                        Search products
                    </label>
                    <input
                        className='w-full rounded-lg bg-white border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
                        id='search-bar'
                        type='search'
                        placeholder='Search products...'
                        value={ searchTerm }
                        onChange={ (e) =>
                            setSearchTerm(e.target.value)
                        }
                    />
                </div>
            </div>
            <p className='text-sm text-slate-500'>
                Showing { visibleProducts.length } of { filteredProducts.length } results
            </p>
            <div>
                { filteredProducts.length > 0 ? (
                    <main className='py-6'>
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            { visibleProducts.map((product) => (
                                <ProductCard
                                    key={ product.id }
                                    product={ product }
                                />
                            )) }
                        </div>
                        { hasMoreProducts && (
                            <div className='mt-8 flex justify-center'>
                                <button
                                    type='button'
                                    onClick={ () => setVisibleCount((count) => count + 8) }
                                    className='rounded-lg bg-slate-700 px-6 py-3 font-medium text-white transition hover:bg-slate-600'
                                >
                                    Show more products
                                </button>
                            </div>
                        ) }
                    </main>
                ) : (
                    <StatusCard
                        title={ `No products match '${searchTerm}'` }
                        message='Try a different product'
                    />
                ) }
            </div>
        </div>
    );
}

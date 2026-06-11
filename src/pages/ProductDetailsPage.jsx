import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { priceFormat } from '../utils/priceFormat';
import useProduct from '../hooks/useProduct';
import StatusCard from '../components/StatusCard';
import Loading from '../components/Loading';

export default function ProductDetailsPage () {
    const { id } = useParams();
    const { product, loading, error } = useProduct(id);

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (product?.options?.length) {
            setSelectedOption(product.options[0]);
        }
    }, [product]);

    if (loading) {
        return (
            <Loading message='Loading product details...' />
        );
    };

    if (error) {
        return (
            <StatusCard
                title='Product Not Found'
                message='The product you are looking for does not exist.'
                action={ < Link
                    to='/'
                    className='text-slate-900 hover:text-blue-600'
                >
                    Return to Products
                </Link > }
            />
        );
    }

    const updatedPrice = product.price + (selectedOption?.price ?? 0);

    return (
        <main className='mx-auto max-w-7xl pt-6 px-6 bg-white h-screen'>
            <div className='mb-6 text-sm text-slate-500'>
                <Link
                    to='/'
                    className='hover:text-slate-700'
                >
                    Products
                </Link>
                <span className='mx-2'>/</span>
                <span>{ product.title }</span>
            </div>
            <div className='gap-8 grid lg:grid-cols-2'>
                <div className='rounded-xl bg-slate-50 aspect-[4/3] overflow-hidden border border-slate-200'>
                    { product.image ? (
                        <img
                            src={ product.image }
                            alt={ product.title }
                            className='h-full w-full object-cover'
                        />
                    ) : (
                        <div className='flex items-center justify-center h-96'>
                            <span className='text-slate-500'>
                                No Image Available
                            </span>
                        </div>
                    ) }
                </div>
                <div>
                    <div className='gap-2 mb-4 flex flex-wrap'>
                        { product.categories.map((category) => (
                            <span
                                key={ category }
                                className='bg-slate-100 px-3 py-1 text-sm text-slate-600 rounded-full'
                            >
                                { category }
                            </span>
                        )) }
                    </div>
                    <h2 className='text-3xl font-bold text-slate-900'>{ product.title }</h2>
                    { product.brand && (
                        <p className='mt-2 text-slate-500'>by { product.brand }</p>
                    ) }
                    <h3 className='mt-6 text-3xl font-bold text-slate-900'>
                        { priceFormat(updatedPrice, product.fx) }
                    </h3>
                    { product.shippingDays != null && (
                        <div className='mt-6 rounded-lg bg-slate-200 p-4 text-slate-800'>
                            Ships in { product.shippingDays } day
                            { product.shippingDays !== 1 ? 's' : '' }
                        </div>
                    ) }
                    { product.options?.length > 0 && (
                        <section className='mt-8'>
                            <h4 className='mb-3 text-lg font-semibold'>Available options:</h4>
                            <div className='space-y-2'>
                                { product.options.map((option) => (
                                    <button
                                        key={ option.label }
                                        type='button'
                                        onClick={ () => setSelectedOption(option) }
                                        className={ `flex w-full items-center justify-between rounded-lg border p-3 text-left transition 
                                            ${selectedOption?.label === option.label
                                                ? 'border-slate-900 bg-slate-100'
                                                : 'border-slate-200 hover:border-slate-400'
                                            }` }
                                    >
                                        <span>{ option.label }</span>
                                        <span>
                                            { option.price > 0
                                                ? `+${priceFormat(option.price, product.fx)}`
                                                : 'Included' }
                                        </span>
                                    </button>
                                )) }
                            </div>
                        </section>
                    ) }
                </div>
            </div>
            <section className='mt-8 border-t border-slate-300 pt-4'>
                <h3 className='text-xl font-semibold'>
                    Description
                </h3>
                <p className='mt-2 leading-relaxed text-slate-600 pb-8'>
                    { product.description }
                </p>
            </section>
        </main>
    );
}

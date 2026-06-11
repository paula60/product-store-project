import { Link } from 'react-router-dom';
import { priceFormat } from '../utils/priceFormat';

export default function ProductCard ({ product }) {
    return (
        <Link
            to={ `/products/${product.id}` }
            className='bg-white flex flex-col group h-full p-4 shadow-sm transition hover:shadow-md rounded-xl cursor-pointer border border-slate-200'
        >
            <div className='overflow-hidden rounded-lg mb-4 flex h-48 items-center justify-center bg-slate-100'>
                { product.image ? (
                    <img
                        src={ product.image }
                        alt={ product.title }
                        loading='lazy'
                        className='h-full w-full object-cover transition group-hover:scale-105'
                    />
                ) : (
                    <span className='text-sm text-slate-700 transition group-hover:scale-105'>
                        No Image Available
                    </span>
                ) }
            </div>
            <div className='gap-2 mb-2 flex flex-wrap'>
                { product.categories.map((category) => (
                    <span
                        key={ category }
                        className='bg-slate-100 px-2 text-xs text-slate-600 py-1 rounded-full'
                    >
                        { category }
                    </span>
                )) }
            </div>
            <h3 className='font-semibold text-lg group-hover:text-blue-900'>
                { product.title }
            </h3>
            { product.brand && (
                <p className='text-slate-500 mt-1 text-sm'>
                    { product.brand }
                </p>
            ) }
            <h4 className='font-bold text-lg mt-auto pt-3'>
                { priceFormat(product.price, product.fx) }
            </h4>
        </Link>
    );
}

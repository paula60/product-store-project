import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header className='bg-white/90 shadow-sm border-b border-slate-200 backdrop-blur'>
            <div className='mx-auto max-w-7xl px-6 py-4 items-center'>
                <h1>
                    <Link
                        to='/'
                        className='font-bold text-slate-900 text-xl transition hover:text-slate-700'
                    >
                        Product Store
                    </Link>
                </h1>
            </div>
        </header>
    );
}

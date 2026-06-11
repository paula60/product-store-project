export default function Loading ({ message }) {
    return (
        <main className='mx-auto max-w-7xl p-6'>
            <div className='p-12 text-center'>
                <p className='text-slate-800'>
                    { message }
                </p>
            </div>
        </main>
    );
}

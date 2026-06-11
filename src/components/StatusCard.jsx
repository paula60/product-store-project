export default function StatusCard ({ title, message, action }) {
    return (
        <main className='mx-auto max-w-7xl p-6'>
            <div className='p-12 text-center bg-white rounded-xl border border-slate-200'>
                <h2 className='text-2xl font-semibold'>
                    { title }
                </h2>
                <p className='text-slate-600 my-4'>
                    { message }
                </p>
                { action && (
                    <div>{ action }</div>
                ) }
            </div>
        </main>
    );
}

import { Link } from 'react-router-dom';
import StatusCard from '../components/StatusCard';

export default function NotFoundPage () {
    return (
        <StatusCard
            title='404 - Page not Found'
            message='The page you are looking for does not exist'
            action={
                < Link
                    to='/'
                    className='hover:text-blue-600 text-slate-900'
                >
                    Return to Products Page
                </Link >
            }
        />
    );
}

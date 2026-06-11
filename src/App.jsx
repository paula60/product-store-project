import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App () {

  return (
    <div className='min-h-screen bg-slate-100'>
      <Header />
      <Routes>
        <Route path='/' element={ <ProductsPage /> } />
        <Route path='/products/:id' element={ <ProductDetailsPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </div>
  )
}

export default App

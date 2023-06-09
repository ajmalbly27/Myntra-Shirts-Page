import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/cart';

import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import NavBar from './components/Header/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <NavBar />
            <h4 className='text'>Shirts For Men & Women</h4>
            <h3 className='text filter'>FILTERS</h3>
            <div className='product-filter-wrapper'>
              <Filter />
              <Product />
            </div>
            <Footer />
          </div>
        }/>
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;

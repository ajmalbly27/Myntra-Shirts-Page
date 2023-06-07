import './App.css';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import NavBar from './components/Header/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h4 className='text'>Shirts For Men & Women</h4>
      <h3 className='text'>FILTERS</h3>
      <div className='product-filter-wrapper'>
        <Filter />
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;

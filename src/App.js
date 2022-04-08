import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import { CartProvider } from './pages/CartContext';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Catproduct from './pages/Catproduct';
function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Header />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/category/:id' element={<Catproduct />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Catalog from './components/Catalog/Catalog';
import Product from './components/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productList, setProductList] = useState([])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Catalog setSelectedProduct={setSelectedProduct} products={productList} setProductList={setProductList} />} />
          <Route path='/product' element={<Product selectedProduct={selectedProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

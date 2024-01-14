import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdProvider from './Context/IdProvider';

function App() {
  // Set an initial value for the context


  return (
    <BrowserRouter>
      <IdProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart/:index' element={<Cart />} />
        </Routes>
      </IdProvider>

    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Product from './Product';
import './App.css'; // Optional: for styles

const App = () => {
  return (
    <div>
      <h1>Product Details</h1>
      <Product productId={1} /> {/* You can change the ID */}
    </div>
  );
};

export default App;

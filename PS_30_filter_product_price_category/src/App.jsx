import React from 'react';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';

import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Tech & Lifestyle Shop</h1>
        <p>Discover our premium selection of products</p>
      </header>
      
      <main className="main-content">
        <div className="sidebar-container">
          <FilterBar />
          <AddProduct />
        </div>
        <ProductList />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { filteredItems } = useSelector((state) => state.products);

  if (filteredItems.length === 0) {
    return (
      <div className="product-grid-container">
        <div className="no-results">
          <h3>No products found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {filteredItems.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-info no-image">
              <span className="product-badge-inline">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

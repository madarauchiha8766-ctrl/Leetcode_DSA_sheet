import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';
import { PlusCircle } from 'lucide-react';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !price) return;

    const newProduct = {
      id: Date.now(), // Generate a unique ID
      name,
      category,
      price: Number(price),
    };

    dispatch(addProduct(newProduct));
    
    // Reset form
    setName('');
    setCategory('');
    setPrice('');
  };

  return (
    <div className="add-product-container">
      <h3 className="filter-title" style={{ marginBottom: '1rem' }}>
        <PlusCircle size={18} />
        Add New Product
      </h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input 
          type="text" 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Category (e.g. Electronics)" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)}
          min="1"
          required
        />
        <button type="submit" className="add-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

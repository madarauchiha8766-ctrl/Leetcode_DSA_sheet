import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter, setPriceFilter, resetFilters } from '../store/productSlice';
import { Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';

const FilterBar = () => {
  const dispatch = useDispatch();
  const { filters, items } = useSelector((state) => state.products);
  
  // Extract unique categories from items
  const categories = ['All', ...new Set(items.map(item => item.category))];
  
  // Find max price for the slider
  const maxPrice = Math.max(...items.map(item => item.price), 100);

  return (
    <aside className="filter-sidebar">
      <div className="filter-group">
        <h3 className="filter-title">
          <Filter size={18} />
          Categories
        </h3>
        <div className="category-list">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${filters.category === category ? 'active' : ''}`}
              onClick={() => dispatch(setCategoryFilter(category))}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">
          <SlidersHorizontal size={18} />
          Max Price
        </h3>
        <div className="price-slider-container">
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={filters.priceRange}
            onChange={(e) => dispatch(setPriceFilter(Number(e.target.value)))}
            className="price-slider"
          />
          <span className="price-value">${filters.priceRange}</span>
        </div>
      </div>

      <button className="reset-btn" onClick={() => dispatch(resetFilters())}>
        <RotateCcw size={18} />
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterBar;

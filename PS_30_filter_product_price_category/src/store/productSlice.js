import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/products';

const initialState = {
  items: products,
  filteredItems: products,
  filters: {
    category: 'All',
    priceRange: 1000 // max price
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setPriceFilter: (state, action) => {
      state.filters.priceRange = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    resetFilters: (state) => {
      state.filters.category = 'All';
      state.filters.priceRange = 1000;
      state.filteredItems = state.items;
    },
    applyFilters: (state) => {
      let result = state.items;
      
      // Apply Category Filter
      if (state.filters.category !== 'All') {
        result = result.filter(item => item.category === state.filters.category);
      }
      
      // Apply Price Filter
      result = result.filter(item => item.price <= state.filters.priceRange);
      
      state.filteredItems = result;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
      productSlice.caseReducers.applyFilters(state);
    }
  }
});

export const { setCategoryFilter, setPriceFilter, resetFilters, addProduct } = productSlice.actions;
export default productSlice.reducer;

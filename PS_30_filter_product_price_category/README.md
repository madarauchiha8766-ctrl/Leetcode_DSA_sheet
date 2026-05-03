# React Product Filter with Redux

A beautiful, fully functional React application that allows users to seamlessly filter products by category or price range using Redux Toolkit for state management.

## Project Structure

This project follows a clean and modular folder structure:

- **`src/components/`**: Contains the reusable UI components.
  - `ProductList.jsx`: Renders the grid of products dynamically.
  - `AddProduct.jsx`: Form to dynamically add a new product to the list.
- **`src/store/`**: Contains the Redux state management logic.
  - `index.js`: The global Redux store configuration.
  - `productSlice.js`: Contains the state, actions, and reducer logic for products, filtering, and adding.
- **`src/data/`**: Contains mock data.
  - `products.js`: A dummy list of products with categories and prices (without images).
- **`src/App.jsx`**: The main layout combining the Sidebar (FilterBar + AddProduct) and ProductList.
- **`src/index.css`**: Global styles with modern, responsive, and beautiful aesthetics.
- **`src/main.jsx`**: Entry point where the React app is wrapped with the Redux `<Provider>`.

## Core Functionalities Implementation

1. **State Management (Redux):** 
   - The entire app state is managed inside `productSlice.js`. It holds three main things: `items` (the master list of products), `filters` (current category and max price), and `filteredItems` (the products currently shown to the user).
   - This prevents prop-drilling and makes the data globally accessible to any component.

2. **Filtering Logic:** 
   - When a user selects a category or adjusts the price slider, an action (`setCategoryFilter` or `setPriceFilter`) is dispatched to the Redux store.
   - The Reducer then executes the `applyFilters` logic, which simultaneously checks both the selected category and the maximum price against the master `items` array, outputting the result to `filteredItems`.
   - The UI instantly updates because `ProductList` is subscribed to `filteredItems`.

3. **Adding New Products:**
   - The `AddProduct` component contains a form with controlled inputs (`useState`) for Name, Category, and Price.
   - On submit, it dispatches the `addProduct` action to the Redux store with the new product object.
   - The reducer appends this new product to the `items` list and immediately re-triggers `applyFilters`. This means if the new product falls within the current filter constraints, it appears on the screen instantly!
   - Because the `FilterBar` dynamically generates its category list and max price slider based on the `items` array, adding a product with a new category or a higher price automatically updates the filter options in the sidebar.

4. **Resetting Filters:** 
   - Dispatching the `resetFilters` action reverts the category to "All", resets the max price, and sets `filteredItems` back to the full `items` array.

## How to Run the Project

You can start this project locally with a **single command**. 

Simply double-click the `run.bat` file in the project folder, or run it from your terminal:

```cmd
run.bat
```

This script will automatically:
1. Install any missing dependencies (`npm install`).
2. Start the local development server (`npm run dev`).
3. The terminal will provide a local URL (e.g., `http://localhost:5173/`) which you can open in your browser to view the application.

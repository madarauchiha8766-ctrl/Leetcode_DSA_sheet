# Light and Dark Mode React Application

This is a beautiful, fully functional React application that allows you to seamlessly toggle between Light Mode and Dark Mode. 

## 🚀 How to Run the Project

You only need ONE command to run this project!

Simply run the following command in your terminal from this directory:

```bash
run.bat
```

*(Alternatively, you can just double-click the **`run.bat`** file in your file explorer!)*

This script will automatically install all necessary dependencies (if missing) and start the development server for you. Once it finishes, open your browser and go to the link provided in the terminal (usually `http://localhost:5173`).

## 📁 Folder Structure

Here is a simple explanation of what each file and folder does in this project:

- **`src/`**: This folder contains all the source code for the application.
  - **`App.jsx`**: The main React component. This is where the Light/Dark mode logic lives. It uses `useState()` to store the theme, `useEffect()` to persist it, and a button to toggle between themes dynamically.
  - **`index.css`**: Contains all the styling for the application, including the smooth transitions and color palettes for both light and dark modes.
  - **`main.jsx`**: The entry point of the React application that hooks the `App` component to the HTML.
- **`public/`**: Stores static assets (like icons or logos) that are served directly.
- **`node_modules/`**: Contains all the installed external libraries and dependencies.
- **`package.json`**: Keeps track of the project's dependencies and configuration.
- **`run.bat`**: The single script file created for you to install dependencies and run the application instantly.

## ⚙️ Core Functionalities Implementation

Here is a breakdown of how the core features were built in this project:

1. **State Management (`useState`)**: 
   The React `useState` hook is used to track the current mode (`light` or `dark`). When the app loads, it initializes the state by first checking if a theme is already saved in the browser's `localStorage`.

2. **Theme Persistence (`useEffect` & `localStorage`)**:
   The `useEffect` hook monitors the `theme` state. Whenever the theme changes, it updates the `app-theme` value inside the browser's `localStorage`. This ensures that even if you refresh the page or close the tab, your theme preference is remembered.

3. **Dynamic Styling (CSS Variables & `data-theme`)**:
   In `index.css`, distinct CSS color variables (like `--bg-color`, `--text-color`) are defined for the default light mode. We also define a `[data-theme='dark']` CSS selector that overwrites these variables with dark mode colors. The React app dynamically applies the `data-theme` attribute directly to the HTML document element based on the active state, triggering smooth CSS transitions between the color palettes.

4. **Toggle Mechanism**:
   A single button is used to switch modes. Clicking the button triggers the `toggleTheme` function, which simply flips the state from `'light'` to `'dark'` or vice versa. The UI (including the icons and text) updates instantly to reflect the current state.

## 🔌 API Endpoints

*Note: This is a purely front-end React application, so it does not have any backend API endpoints.* 

All the necessary data (like your theme preference) is saved locally directly in your web browser using **`localStorage`**. This ensures your theme selection persists even if you refresh the page or close the browser!

# Real-Time Digital Clock (React)

A modern, responsive, and visually stunning Real-Time Digital Clock built using React. This application displays the current time in `HH:MM:SS` format, updating automatically every second, and includes a start/stop toggle feature.

## 🚀 How to Run the Project

You only need **one command** to run this project! Open your terminal, ensure you are in the project folder, and run:

```bash
npm run dev
```

This single command will start the local development server. Once it is running, you can view your app in your browser (typically at `http://localhost:5173`).

---

## 📂 Project Structure

Here is a simple breakdown of the important folders and files in this project to help you understand how it works:

- **`src/`**: This is the main folder where all the magic happens. All your React code lives here.
  - **`App.jsx`**: The main React component. It contains the logic for the digital clock using `useState` (to store the time) and `useEffect` (to update the time every second). It also contains the start/stop functionality.
  - **`App.css`**: Contains all the styling for the application. It ensures the clock looks premium with dark mode aesthetics, glassmorphism, and responsive design.
  - **`main.jsx`**: The entry point of the React application. It takes the `App` component and injects it into the HTML page.
  - **`index.css`**: Global stylesheet (cleared out so `App.css` can handle the custom styling seamlessly).
- **`public/`**: Contains static assets like the Vite logo. Anything here is served as-is without being processed by Vite.
- **`package.json`**: This file keeps track of all the project dependencies (like React) and the scripts (like `npm run dev`) used to run or build the project.
- **`index.html`**: The main HTML file. The React application is loaded into a single `<div>` inside this file.

---

## 🔗 Endpoints

Since this is a **Front-End React Application**, there are **no backend API endpoints** involved. 

The application runs entirely in your web browser. It uses the browser's built-in `Date` object to fetch the current local time and updates the user interface dynamically using React Hooks.

---

## 🛠️ Core Functionalities & Implementation

Here is a detailed breakdown of how the core logic is implemented in the application:

1. **State Management with `useState()`**:
   - `const [time, setTime] = useState(new Date())`: We initialize the clock with the current timestamp. The `time` state always holds the most recent time object.
   - `const [isRunning, setIsRunning] = useState(true)`: We use this boolean state to determine if the clock is actively ticking or paused.

2. **Real-Time Updates with `useEffect()`**:
   - We utilize the `useEffect` hook to run a side-effect (a timer) when the component mounts or when `isRunning` changes.
   - `setInterval(...)` is triggered every `1000ms` (1 second), fetching a brand new `Date()` and updating the `time` state using `setTime()`.
   - **Cleanup**: The `useEffect` returns a cleanup function that calls `clearInterval()`. This prevents memory leaks and overlapping intervals when the user clicks the "Stop Clock" button.

3. **Time Formatting (HH:MM:SS)**:
   - To achieve the standard digital clock format, a custom helper function `formatTime(date)` extracts hours, minutes, and seconds using `.getHours()`, `.getMinutes()`, and `.getSeconds()`.
   - We chain `.toString().padStart(2, '0')` to ensure that single-digit numbers are always prefixed with a zero (e.g., `09` instead of `9`).

4. **Start / Stop Toggle**:
   - The `toggleClock` function is attached to a button's `onClick` event. It reverses the `isRunning` boolean. Because `isRunning` is included in the `useEffect` dependency array, changing it automatically pauses or resumes the internal timer.

5. **Premium UI**: 
   - Styled with pure CSS to ensure a glassmorphism aesthetic. It uses backdrop filters and dynamic gradient text to provide a modern, visually stunning user experience.

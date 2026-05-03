# Traffic Signal Simulator

A responsive web-based traffic signal light simulator built with HTML, CSS, and JavaScript.

## Basic Concept

This project simulates a real-world traffic light. It visually displays the three standard colors—Red (Stop), Yellow (Caution/Prepare to Stop), and Green (Go)—using glowing CSS effects to mimic LED lights behind a glass lens.

## Features

- **Glowing LED Effects:** Utilizes CSS `box-shadow` and `linear-gradient` to create a realistic illuminated effect.
- **Auto Mode:** Automatically cycles through the lights in a standard traffic pattern (Red -> Green -> Yellow -> Red).
- **Manual Override:** Allows users to click buttons to manually switch to a specific light.
- **Responsive Design:** Scales cleanly for both desktop and mobile devices.

## How It Works

- **HTML (`index.html`)**: Defines the structure of the traffic light housing, the three circular lenses (lights), and the control panel buttons.
- **CSS (`style.css`)**: Handles the layout and aesthetics. The glowing effect is achieved by dynamically adding an `.active` class to a specific light, which applies a bright background color and an intense outer `box-shadow` to simulate light emitting from the lens.
- **JavaScript (`script.js`)**: Manages the state of the lights. It contains logic to clear the `.active` class from all lights and apply it to the targeted light. For the automatic sequence, it uses `setTimeout` to recursively call functions that transition the lights after specific time delays (e.g., 3 seconds for red/green, 1 second for yellow).

## How to Run

Since this is a client-side only web project, it does not require a complex backend server. You can run it using any of the following methods:

**Method 1: Direct File Open (Easiest)**
1. Navigate to the project folder on your computer (`c:\xampp\htdocs\25`).
2. Double-click on `index.html`. It will open in your default web browser and run automatically.

**Method 2: Using XAMPP / Local Server**
1. Ensure the project folder `25` is placed inside your XAMPP `htdocs` directory (i.e., `c:\xampp\htdocs\25`).
2. Open the XAMPP Control Panel and start the **Apache** module.
3. Open your web browser and go to: `http://localhost/25/`

Enjoy the simulation!

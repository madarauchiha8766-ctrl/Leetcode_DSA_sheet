document.addEventListener('DOMContentLoaded', () => {
    // Light elements
    const redLight = document.getElementById('redLight');
    const yellowLight = document.getElementById('yellowLight');
    const greenLight = document.getElementById('greenLight');
    
    const lights = [redLight, yellowLight, greenLight];

    // Buttons
    const btnRed = document.getElementById('btnRed');
    const btnYellow = document.getElementById('btnYellow');
    const btnGreen = document.getElementById('btnGreen');
    const btnAuto = document.getElementById('btnAuto');
    
    const buttons = [btnRed, btnYellow, btnGreen, btnAuto];

    // State
    let autoModeInterval = null;
    let currentAutoState = 0; // 0: Red, 1: Green, 2: Yellow

    // Reset all lights to inactive state
    function turnOffAllLights() {
        lights.forEach(light => {
            light.classList.remove('active');
        });
    }

    // Reset all buttons to inactive state
    function turnOffAllButtons() {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
    }

    // Turn on a specific light
    function turnOnLight(lightElement, buttonElement) {
        turnOffAllLights();
        turnOffAllButtons();
        
        lightElement.classList.add('active');
        if (buttonElement) {
            buttonElement.classList.add('active');
        }
    }

    // Automatic sequence logic
    function runAutoSequence() {
        turnOffAllLights();
        
        if (currentAutoState === 0) {
            // Red light
            redLight.classList.add('active');
            autoModeInterval = setTimeout(() => {
                currentAutoState = 1;
                runAutoSequence();
            }, 3000); // 3 seconds red
        } else if (currentAutoState === 1) {
            // Green light
            greenLight.classList.add('active');
            autoModeInterval = setTimeout(() => {
                currentAutoState = 2;
                runAutoSequence();
            }, 3000); // 3 seconds green
        } else if (currentAutoState === 2) {
            // Yellow light
            yellowLight.classList.add('active');
            autoModeInterval = setTimeout(() => {
                currentAutoState = 0;
                runAutoSequence();
            }, 1000); // 1 second yellow
        }
    }

    function startAutoMode() {
        stopAutoMode();
        turnOffAllButtons();
        btnAuto.classList.add('active');
        currentAutoState = 0; // Start with Red
        runAutoSequence();
    }

    function stopAutoMode() {
        if (autoModeInterval) {
            clearTimeout(autoModeInterval);
            autoModeInterval = null;
        }
    }

    // Event Listeners
    btnRed.addEventListener('click', () => {
        stopAutoMode();
        turnOnLight(redLight, btnRed);
    });

    btnYellow.addEventListener('click', () => {
        stopAutoMode();
        turnOnLight(yellowLight, btnYellow);
    });

    btnGreen.addEventListener('click', () => {
        stopAutoMode();
        turnOnLight(greenLight, btnGreen);
    });

    btnAuto.addEventListener('click', () => {
        startAutoMode();
    });

    // Start auto mode by default
    startAutoMode();
});

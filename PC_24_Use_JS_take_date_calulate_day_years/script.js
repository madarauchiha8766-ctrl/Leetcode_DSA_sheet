// Set max date to today
const dateInput = document.getElementById("dob");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", today);

function calculateAge() {
    const dobValue = document.getElementById("dob").value;
    
    if (!dobValue) {
        alert("Please enter a valid Date of Birth");
        return;
    }

    const dob = new Date(dobValue);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    // Adjust days and months if necessary
    if (days < 0) {
        months--;
        // Get the number of days in the previous month
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Handle edge case where calculating age for today's date
    if (years === 0 && months === 0 && days === 0) {
        // Technically 0 days, but keeping as 0
    }

    // Animate the result elements
    animateValue("res-years", years);
    animateValue("res-months", months);
    animateValue("res-days", days);
    
    // Add pop animation to the boxes
    const resultBoxes = document.querySelectorAll('.result-box');
    resultBoxes.forEach(box => {
        box.classList.remove('animate-result');
        void box.offsetWidth; // Trigger reflow
        box.classList.add('animate-result');
    });
}

function animateValue(id, endValue) {
    const obj = document.getElementById(id);
    // Simple direct update since the user experience is better when snappy
    obj.textContent = endValue;
}

# ⚡ Electricity Bill Calculator (PHP)

## 📌 Overview
This project calculates electricity bill based on slab rates:

- First 50 units → ₹3.50/unit  
- Next 100 units → ₹4.00/unit  
- Next 100 units → ₹5.20/unit  
- Above 250 units → ₹6.50/unit  

---

## 📂 Files
- index.html → Input form  
- calculate.php → Bill calculation logic  
- README.md → Explanation  

---

## ▶️ How to Run
1. Install XAMPP  
2. Place folder in:
   C:\xampp\htdocs\electricity_bill_php  
3. Start Apache  
4. Open:
   http://localhost/electricity_bill_php/index.html  

---

## 🧠 Logic Explanation

### Slab Calculation
- If units ≤ 50 → direct multiplication  
- If 51–150 → first slab + second slab  
- If 151–250 → add third slab  
- Above 250 → add all slabs  

Example:
If units = 300  
Bill =  
(50×3.5) + (100×4) + (100×5.2) + (50×6.5)

---

## 📌 Features
- Responsive UI (Bootstrap)
- PHP backend calculation
- Accurate slab-wise billing

---

## 📌 Conclusion
Demonstrates conditional logic, form handling, and PHP integration.

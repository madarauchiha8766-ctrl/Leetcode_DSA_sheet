@echo off
echo =========================================
echo    Order Management API Testing Script
echo =========================================
echo.

echo 1. Creating a new Order...
curl -X POST http://localhost:8080/api/orders ^
     -H "Content-Type: application/json" ^
     -d "{\"customerName\":\"John Doe\",\"product\":\"Laptop\",\"quantity\":1,\"price\":1200.50}"
echo.
echo.

echo 2. Getting all Orders...
curl -X GET http://localhost:8080/api/orders
echo.
echo.

echo 3. Getting Order by ID (Assuming ID 1)...
curl -X GET http://localhost:8080/api/orders/1
echo.
echo.

echo 4. Updating Order with ID 1...
curl -X PUT http://localhost:8080/api/orders/1 ^
     -H "Content-Type: application/json" ^
     -d "{\"customerName\":\"John Doe\",\"product\":\"Gaming Laptop\",\"quantity\":2,\"price\":2400.00,\"status\":\"SHIPPED\"}"
echo.
echo.

echo 5. Getting Order by ID 1 after update...
curl -X GET http://localhost:8080/api/orders/1
echo.
echo.

echo 6. Deleting Order with ID 1...
curl -X DELETE http://localhost:8080/api/orders/1
echo.
echo.

echo 7. Getting all Orders after deletion...
curl -X GET http://localhost:8080/api/orders
echo.
echo.

echo Tests finished.
pause

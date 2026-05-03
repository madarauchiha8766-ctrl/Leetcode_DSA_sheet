# Spring Boot Order Management System

Welcome to the Order Management System! This is a simple yet fully functional REST API application built with **Spring Boot** and an **H2 In-Memory Database**. It allows you to manage customer orders seamlessly.

---

## 🚀 How to Run the Project (Single Command)

You only need **one command** to start the entire application!

1. Open your terminal (Command Prompt or PowerShell) inside the project folder (`d:\wt\PS_26_order_management_system`).
2. Simply double-click the **`run.bat`** file, OR type the following command and press Enter:
   ```cmd
   .\run.bat
   ```
*(This command internally uses Maven to build and launch the Spring Boot server).*

The server will start running. You can access the **Beautiful Web UI** by opening your browser to:
👉 **`http://localhost:8080/`**

*(Note: The raw API is still available at `http://localhost:8080/api/orders`)*

---

## 📁 Folder Structure Explained

Here is what each part of the project does in the simplest terms:

- **`pom.xml`**: The recipe book. It tells Maven which libraries (like Spring Web, Database tools) to download for the project.
- **`run.bat`**: The magic button. It's a small script that runs the application with a single click/command.
- **`test_apis.bat`**: A testing script. If you double-click this while the server is running, it will automatically test all the API endpoints so you can see them working.
- **`src/main/resources/application.properties`**: The settings file. It contains the database setup and sets the port to `8080`.
- **`src/main/java/com/example/orders/`**: The core application folder.
  - **`OrderManagementApplication.java`**: The starting engine. This is where the application begins running.
  - **`entity/Order.java`**: The blueprint. It defines what an "Order" is (id, customerName, product, quantity, price, status).
  - **`repository/OrderRepository.java`**: The database communicator. It talks to the H2 database to save, find, and delete orders.
  - **`service/OrderService.java`**: The brain. It contains the business rules (e.g., how to find a specific order or update it).
  - **`controller/OrderController.java`**: The receptionist. It handles incoming HTTP requests (like GET, POST) from the user and gives back the correct responses.

---

## ⚙️ Core Functionalities Implementation

The core functionalities are implemented using the standard Spring Boot architecture pattern (Controller -> Service -> Repository):

1.  **Create an Order (`POST`)**: 
    *   **Controller**: `OrderController` receives a JSON payload mapping to an `Order` object.
    *   **Service**: Calls `OrderService.createOrder()`.
    *   **Repository**: Uses `OrderRepository.save()` to persist the entity in the H2 database.
2.  **Get All Orders (`GET`)**: 
    *   **Controller**: Handles the GET request and calls `OrderService.getAllOrders()`.
    *   **Repository**: `OrderRepository.findAll()` fetches all records from the database.
3.  **Get Order by ID (`GET`)**: 
    *   **Controller**: Extracts the `id` from the URL path.
    *   **Service**: `OrderService.getOrderById()` uses `OrderRepository.findById()`. If not found, it returns an empty `Optional`, resulting in a `404 Not Found`.
4.  **Update an Order (`PUT`)**: 
    *   **Controller**: Receives the ID and the new `Order` data.
    *   **Service**: `OrderService.updateOrder()` first checks if the order exists. If it does, it updates the `customerName`, `product`, `quantity`, `price`, and `status`, then calls `save()`. If not found, it throws a `RuntimeException`.
5.  **Delete an Order (`DELETE`)**: 
    *   **Service**: `OrderService.deleteOrder()` attempts to delete using `OrderRepository.deleteById()`. If the order doesn't exist, a `RuntimeException` is thrown.

---

## ⚙️ Core Functionalities Implementation

1. **Entity-Relational Mapping (JPA/Hibernate):**
   - The application uses `@Entity` mapping in `Order.java` to translate Java objects into database tables automatically.
   - Spring Data JPA's `JpaRepository` interface provides powerful out-of-the-box methods (`save()`, `findById()`, `findAll()`, `deleteById()`) without needing to write a single line of SQL.

2. **RESTful Architecture:**
   - The `OrderController` is marked with `@RestController` and handles standard HTTP operations (GET, POST, PUT, DELETE).
   - `@RequestMapping("/api/orders")` securely routes all incoming API traffic to the appropriate service methods.
   - `@RequestBody` automatically deserializes incoming JSON payloads into Java objects.

3. **Business Logic Layer:**
   - The `OrderService` cleanly separates business operations from HTTP routing and Database querying.
   - It contains logic for handling null checks (e.g., throwing exceptions if an order doesn't exist) and managing state updates before saving to the database.

4. **Volatile Storage:**
   - The application seamlessly integrates an **H2 In-Memory Database** using Spring Boot Auto-configuration. It automatically spins up the database and creates the necessary tables during server boot based on the Entity definitions.

---

## 🔌 API Endpoints Information

You can use **Postman**, your browser, or the provided `test_apis.bat` file to interact with these endpoints.

### 1. Create an Order
- **URL**: `POST http://localhost:8080/api/orders`
- **What it does**: Creates a new order in the database.
- **JSON Body Example**:
  ```json
  {
    "customerName": "John Doe",
    "product": "Laptop",
    "quantity": 1,
    "price": 1200.50
  }
  ```

### 2. Get All Orders
- **URL**: `GET http://localhost:8080/api/orders`
- **What it does**: Retrieves a list of all orders currently in the system.

### 3. Get an Order by ID
- **URL**: `GET http://localhost:8080/api/orders/{id}` *(e.g., `.../orders/1`)*
- **What it does**: Retrieves the specific details of a single order using its unique ID number.

### 4. Update an Order
- **URL**: `PUT http://localhost:8080/api/orders/{id}` *(e.g., `.../orders/1`)*
- **What it does**: Modifies an existing order. You must provide the updated details in the JSON body.
- **JSON Body Example**:
  ```json
  {
    "customerName": "John Doe",
    "product": "Gaming Laptop",
    "quantity": 2,
    "price": 2400.00,
    "status": "SHIPPED"
  }
  ```

### 5. Delete an Order
- **URL**: `DELETE http://localhost:8080/api/orders/{id}` *(e.g., `.../orders/1`)*
- **What it does**: Permanently removes the order from the database.

---

### Database Note
Since this project uses an **H2 In-Memory Database**, you do not need to install MySQL or PostgreSQL. The database is created automatically when the app starts, but **all data will be wiped when the application stops**. You can view the database console at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:orderdb`, User: `sa`, Password: `password`).

# Product Inventory Management System

A Spring Boot-based application that stores and manages product details using MongoDB. The application is secured with Spring Security Basic Authentication and provides standard RESTful APIs to perform basic CRUD operations.

## Features

1. **MongoDB Connection**: Uses Spring Data MongoDB to communicate with a local MongoDB instance.
2. **Document Class**: Represents the `Product` entity (`id`, `name`, `description`, `price`, `quantity`).
3. **Repository Layer**: Utilizes `MongoRepository` for clean and quick database access.
4. **Spring Security**: Implemented Basic Authentication for all API endpoints to ensure data security.
5. **REST APIs (CRUD)**: Endpoints for creating, reading, updating, and deleting products.

## Folder Structure

Here is a simple explanation of the folders and their tasks:

- **`src/main/java/com/example/inventory/model/`**: Contains the `Product` document class. This acts as the blueprint for the data we store in MongoDB.
- **`src/main/java/com/example/inventory/repository/`**: Contains the `ProductRepository` interface. It provides built-in methods (like `save`, `findAll`, `findById`) to interact with the database without writing boilerplate SQL/Mongo queries.
- **`src/main/java/com/example/inventory/controller/`**: Contains the `ProductController`. This handles the incoming HTTP requests (GET, POST, PUT, DELETE) and sends back the appropriate responses.
- **`src/main/java/com/example/inventory/config/`**: Contains the `SecurityConfig`. This handles security features, ensuring users must authenticate via Basic Auth to access the system.
- **`src/main/resources/`**: Contains `application.properties` where the MongoDB connection URI and the default admin credentials are defined.

## Core Functionality Implementation Details

1. **Configuration**: Found in `application.properties`, we configured `spring.data.mongodb.uri` to connect to our local MongoDB (`inventory_db`). Default security credentials (`spring.security.user.name` and `password`) are also configured here.
2. **Model**: The `Product` class is annotated with `@Document(collection = "products")` to map directly to a MongoDB collection. `@Id` is used for the unique identifier.
3. **Repository**: The `ProductRepository` interface extends `MongoRepository<Product, String>`. Spring automatically implements this interface at runtime to provide standard CRUD operations.
4. **Security**: The `SecurityConfig` class disables CSRF (common for REST APIs) and configures `.httpBasic()` so that all requests to `/api/products/**` must be authenticated.
5. **Controller (CRUD REST APIs)**: The `ProductController` maps endpoints using `@GetMapping`, `@PostMapping`, `@PutMapping`, and `@DeleteMapping`. It injects the `ProductRepository` via `@Autowired` to perform the actual DB operations and return `ResponseEntity` objects with standard HTTP status codes (200 OK, 201 Created, 404 Not Found, etc.).

## How to Run

To run this application using a single command, double-click the `run.bat` file in your project folder, or run the following command in your terminal:

```cmd
run.bat
```
*(This command essentially runs `./mvnw spring-boot:run` to compile and launch the Spring Boot application)*

> **Prerequisites**: 
> - Make sure you have Java 17 installed.
> - Ensure you have MongoDB running locally on `localhost:27017`.

## API Endpoints & Postman Testing

All endpoints are prefixed with `/api/products`.
**IMPORTANT**: Ensure you use **Basic Auth** in Postman with the following credentials:
- **Username**: `admin`
- **Password**: `password`

### 1. Get All Products
- **Method**: `GET`
- **URL**: `http://localhost:8080/api/products`

### 2. Get Product by ID
- **Method**: `GET`
- **URL**: `http://localhost:8080/api/products/{id}`

### 3. Create a New Product
- **Method**: `POST`
- **URL**: `http://localhost:8080/api/products`
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
      "name": "Laptop",
      "description": "High performance gaming laptop",
      "price": 1200.00,
      "quantity": 10
  }
  ```

### 4. Update an Existing Product
- **Method**: `PUT`
- **URL**: `http://localhost:8080/api/products/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
      "name": "Laptop",
      "description": "High performance gaming laptop (Updated)",
      "price": 1150.00,
      "quantity": 8
  }
  ```

### 5. Delete a Product
- **Method**: `DELETE`
- **URL**: `http://localhost:8080/api/products/{id}`

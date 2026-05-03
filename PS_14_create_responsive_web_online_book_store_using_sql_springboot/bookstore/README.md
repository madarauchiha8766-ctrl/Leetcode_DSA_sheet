# Lumina Books - Online Book Store

Lumina Books is a responsive, premium web application built for browsing a catalog of curated books, creating user accounts, and managing sessions.

## 🛠️ Tools & Technologies Used
- **Spring Boot 3.5.x**: The core framework providing embedded Tomcat, DI, and MVC routing.
- **Spring Data JPA & Hibernate**: ORM for managing database operations, defining entities (`User`, `Book`), and abstracting raw SQL queries.
- **MySQL Database**: Stores persistent data including registered users and the book catalog.
- **Thymeleaf**: Server-side Java template engine used for rendering dynamic HTML content.
- **Vanilla CSS3**: Custom-crafted, premium styling with glassmorphism, flexbox/grid layouts, and responsive design (no Tailwind or external UI frameworks).
- **Maven Wrapper (`mvnw`)**: Used to easily build and run the Spring Boot project without requiring a local Maven installation.

## ⚙️ How They Work Together
1. **Frontend (Thymeleaf + CSS)**: When a user visits a page (like `/catalog`), Thymeleaf requests data from the backend Controllers. The templates inject data (like book titles) dynamically into the HTML before sending it to the browser.
2. **Backend Controllers (`PageController`, `AuthController`)**: These handle incoming HTTP requests (GET, POST), manage user session state (e.g., keeping a user logged in), and interact with the Database Repositories.
3. **Database Repositories (`UserRepository`, `BookRepository`)**: Interfaces that extend `JpaRepository`. They translate Java method calls (like `findAll()`) into SQL queries executed against the MySQL database.
4. **Database (MySQL)**: The underlying storage. Spring Boot automatically creates the required tables (`users`, `books`) upon first launch using the `spring.jpa.hibernate.ddl-auto=update` property.

## 🚀 How to Run the Project

### Prerequisites
1. **Java Development Kit (JDK 17 or higher)** must be installed and added to your system PATH.
2. **MySQL Server** (e.g., via XAMPP) must be running on port `3306`.
3. The default configuration uses the username `root` with no password. If your setup is different, modify `src/main/resources/application.properties`.

### Execution Steps
1. **Initialize the Database**: 
   A database named `bookstore` must exist. We have provided `database.sql` in the parent directory. You can run it in your MySQL client, or just manually create the database using:
   `CREATE DATABASE IF NOT EXISTS bookstore;`
   *(Note: The tables will be automatically created when the app starts).*

2. **Run the Script**:
   Simply double-click the `run.bat` file in the `bookstore` folder, or run it from the terminal:
   ```cmd
   .\run.bat
   ```

3. **What happens during execution?**
   - The script will compile the Spring Boot project using the included Maven wrapper (`mvnw`).
   - It will start the embedded Tomcat server on `http://localhost:8080`.
   - The default browser will automatically open and navigate to the application.
   - To stop the server, just close the terminal window.

## 📚 Adding Sample Data
To see books in the catalog, you can execute the `INSERT` statements found in `../database.sql` into your MySQL `bookstore` database after running the application for the first time.

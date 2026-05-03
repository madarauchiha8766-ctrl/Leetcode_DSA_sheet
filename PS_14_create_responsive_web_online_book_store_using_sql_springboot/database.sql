CREATE DATABASE IF NOT EXISTS bookstore;
USE bookstore;

-- Note: Tables 'users' and 'books' will be automatically created by Spring Boot Hibernate.

-- We can insert dummy data into the books table
INSERT IGNORE INTO books (id, title, author, price, description, image_url) VALUES 
(1, 'The Quantum Horizon', 'Elias Vance', 24.99, 'A thrilling journey into the unknown regions of space, exploring theoretical physics and human resilience.', 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76?w=400&q=80'),
(2, 'Whispers of the Old Woods', 'Serena Moonglow', 18.50, 'A fantasy epic that unravels the secrets hidden within an ancient, enchanted forest.', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80'),
(3, 'Mastering Spring Boot', 'Java Guru', 45.00, 'The ultimate guide to building enterprise applications with Spring Boot 3.', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80'),
(4, 'The Silent Algorithm', 'Ada Code', 29.99, 'A mystery novel where a brilliant programmer must debug a lethal AI before it is deployed.', 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?w=400&q=80');

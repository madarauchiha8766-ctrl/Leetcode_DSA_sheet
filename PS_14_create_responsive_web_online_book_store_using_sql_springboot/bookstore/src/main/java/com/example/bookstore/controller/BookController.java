package com.example.bookstore.controller;

import com.example.bookstore.entity.Book;
import com.example.bookstore.repository.BookRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/book/add")
    public String showAddBookForm(HttpSession session, Model model) {
        model.addAttribute("loggedIn", session.getAttribute("user") != null);
        return "add-book";
    }

    @PostMapping("/book/add")
    public String addBook(@RequestParam String title,
                          @RequestParam String author,
                          @RequestParam Double price,
                          @RequestParam String description,
                          @RequestParam String imageUrl) {
        Book book = new Book(title, author, price, description, imageUrl);
        bookRepository.save(book);
        return "redirect:/catalog";
    }
}

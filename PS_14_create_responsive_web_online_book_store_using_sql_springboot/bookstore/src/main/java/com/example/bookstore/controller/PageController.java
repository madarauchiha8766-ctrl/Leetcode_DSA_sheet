package com.example.bookstore.controller;

import com.example.bookstore.entity.Book;
import com.example.bookstore.repository.BookRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class PageController {

    private final BookRepository bookRepository;

    public PageController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/")
    public String home(HttpSession session, Model model) {
        model.addAttribute("loggedIn", session.getAttribute("user") != null);
        model.addAttribute("username", session.getAttribute("user"));
        return "index";
    }

    @GetMapping("/catalog")
    public String catalog(HttpSession session, Model model) {
        List<Book> books = bookRepository.findAll();
        model.addAttribute("books", books);
        model.addAttribute("loggedIn", session.getAttribute("user") != null);
        return "catalog";
    }

    @GetMapping("/login")
    public String loginPage(HttpSession session, Model model) {
        if (session.getAttribute("user") != null) {
            return "redirect:/";
        }
        model.addAttribute("loggedIn", false);
        return "login";
    }

    @GetMapping("/register")
    public String registerPage(HttpSession session, Model model) {
        if (session.getAttribute("user") != null) {
            return "redirect:/";
        }
        model.addAttribute("loggedIn", false);
        return "register";
    }
}

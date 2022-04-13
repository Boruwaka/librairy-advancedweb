package com.example.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Component
public class BookController {

    private final BookRepository repository;

    BookController(BookRepository repository) {
        this.repository = repository;
    }

    @Autowired
    BookService bookService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/books")
    public List<Book> booksList() {
        return repository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/books")
    Book newBook(@RequestBody Book newBook) {
        return repository.save(newBook);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/books/{id}")
    Optional<Book> one(@PathVariable Long id) {

        return repository.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/books/{id}")
    Book replaceBook(@RequestBody Book newBook, @PathVariable Long id) {

        return repository.findById(id)
                .map(book -> {
                    book.setTitle(newBook.getTitle());
                    book.setReleaseDate(newBook.getReleaseDate());
                    book.setIsAudio(newBook.getIsAudio());
                    book.setTopic(newBook.getTopic());
                    book.setAuthor(newBook.getAuthor());
                    book.setImageUrl(newBook.getImageUrl());
                    return repository.save(book);
                })
                .orElseGet(() -> {
                    newBook.setId(id);
                    return repository.save(newBook);
                });
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/books/{id}")
    void deleteBook(@PathVariable Long id) {
        repository.deleteById(id);
    }

}

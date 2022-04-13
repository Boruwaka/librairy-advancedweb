package com.example.library;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Component
public class AuthorController {

    private final AuthorRepository repository;

    AuthorController(AuthorRepository repository) {
        this.repository = repository;
    }

    @Autowired
    AuthorService authorService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/authors")
    public List<Author> authorList() {
        return repository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/authors")
    Author newAuthor(@RequestBody Author newAuthor) {
        return repository.save(newAuthor);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/authors/{id}")
    Optional<Author> one(@PathVariable Long id) {

        return repository.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/authors/{id}")
    Author replaceAuthor(@RequestBody Author newAuthor, @PathVariable Long id) {

        return repository.findById(id)
                .map(author -> {
                    author.setFirstname(newAuthor.getFirstname());
                    author.setLastname(newAuthor.getLastname());
                    author.setIsAlive(newAuthor.getIsAlive());
                    return repository.save(author);
                })
                .orElseGet(() -> {
                    newAuthor.setId(id);
                    return repository.save(newAuthor);
                });
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/authors/{id}")
    void deleteAuthor(@PathVariable Long id) {
        repository.deleteById(id);
    }


}

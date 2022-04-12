package com.example.library;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Component
public class AuthorController {

    @Autowired
    AuthorService authorService;

    @GetMapping("/test")
    public String test() {
        Author author = new Author();
        author.setLastname("Bite");
        authorService.save(author);
        return authorService.findById(author.getId()).toString();
    }
}

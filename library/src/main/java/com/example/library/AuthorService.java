package com.example.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component("authorService")
public class AuthorService implements IAuthorService{

    @Autowired
    private AuthorRepository authorRepository;

    @Override
    public Optional<Author> findById(Long id) {
        return authorRepository.findById(id);
    }

    public Author save(Author author) {
        return authorRepository.save(author);
    }

    public List<Author> findAll() {
        return (List<Author>) authorRepository.findAll();
    }

    public void delete(Long id) {
        authorRepository.deleteById(id);
    }
}

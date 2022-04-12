package com.example.library;

import java.util.List;
import java.util.Optional;

public interface IAuthorService {
    Optional<Author> findById(Long id);
    Author save(Author author);
    List<Author> findAll();
    void delete(Long id);
}

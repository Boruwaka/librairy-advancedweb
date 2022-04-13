package com.example.library;

import java.util.List;
import java.util.Optional;

public interface IBookService {
    Optional<Book> findById(Long id);
    Book save(Book book);
    List<Book> findAll();
    void delete(Long id);

}

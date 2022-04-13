package com.example.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component("bookService")
public class BookService implements IBookService{

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> findAll() {
        return (List<Book>) bookRepository.findAll();
    }

    public void delete(Long id) {
        bookRepository.deleteById(id);
    }

}

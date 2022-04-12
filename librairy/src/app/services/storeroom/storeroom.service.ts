import { Injectable } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { Book } from 'src/app/models/book/book';

@Injectable({
  providedIn: 'root'
})
export class StoreroomService {
  books: Book[] = [];
  authors: Author[] = [];

  constructor() { }

  addBook(
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean) {
    this.books.push(new Book(
      title, author, releaseDate, topic, imageUrl, isAudio)
    );

    return this.books;
  }

  getBooks() {
    return this.books;
  }

  deleteBook(id:string) {
    for( var i = 0; i < this.books.length; i++){                  
      if ( this.books[i].id === id) { 
        this.books.splice(i, 1); 
        i--; 
      }
    }
    return this.books;
  }

  updateBook(
    id:string,
    title:string,
    author:string,
    releaseDate:number=new Date().getFullYear(),
    topic:string="",
    imageUrl:string="",
    isAudio:boolean= false) {
    for( var i = 0; i < this.books.length; i++){                  
      if ( this.books[i].id === id) { 
        this.books[i].update(title, author, releaseDate, topic, imageUrl, isAudio);
      }
    }
    return this.books;
  }

  addAuthor(
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean) {
      this.authors.push(new Author(firstname, lastname, birthdate, isAlive)
    );

    return this.authors;
  }

  updateAuthor(
    id:string,
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean) {
    for( var i = 0; i < this.authors.length; i++){                  
      if ( this.authors[i].id === id) { 
        this.authors[i].update(firstname, lastname, birthdate, isAlive);
      }
    }
    return this.authors;
  }

  getAuthorsName() {
    return this.authors.map(author => author.firstname+' '+author.lastname);
  }

  getAuthors() {
    return this.authors;
  }

  deleteAuthor(id:string) {
    for( var i = 0; i < this.authors.length; i++){                  
      if ( this.authors[i].id === id) { 
        this.authors.splice(i, 1); 
        i--; 
      }
    }
    return this.authors;
  }
}

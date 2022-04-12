import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { StoreroomService } from 'src/app/services/storeroom/storeroom.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isUpdating: boolean = false;
  books: Book[] = [];
  authors: string[] = [];
  topics: string[] = ["historique", "policier", "amour", "espionnage", "Science-fiction", "Fantasy", "Biographie", "Conte", "Nouvelles"];
  newBook: {
    id: string,
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean } = {
      id: '',
      title: '',
      author: '',
      releaseDate: new Date().getFullYear(),
      topic: '',
      imageUrl: 'https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png',
      isAudio: false,
  };
  bookToDelete: {id:string, title: string} = {
    id: '',
    title: ''
  };
  storeroom: StoreroomService;

  constructor(storeroom: StoreroomService) {
    this.storeroom = storeroom;
  }

  ngOnInit(): void {
    this.authors = this.storeroom.getAuthorsName()
    this.books = this.storeroom.getBooks();
  }

  initBookCreate() {
    this.isUpdating = false;
    this.newBook = {
      id: '',
      title: '',
      author: '',
      releaseDate: new Date().getFullYear(),
      topic: '',
      imageUrl: 'https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png',
      isAudio: false,
    };
  }

  addBook(newBook: {
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean }): void {
      this.books = this.storeroom.addBook(newBook.title, newBook.author, newBook.releaseDate, newBook.topic, newBook.imageUrl, newBook.isAudio);
  }

  initBookToUpdate(book:Book) {
    this.isUpdating = true;
    this.newBook = {
      id: book.id,
      title: book.title,
      author: book.author,
      releaseDate: book.releaseDate,
      topic: book.topic,
      imageUrl: book.imageUrl,
      isAudio: book.isAudio,
    };
  }

  updateBook(newBook: {
    id: string,
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean }) {
      this.books = this.storeroom.updateBook(newBook.id, newBook.title, newBook.author, newBook.releaseDate, newBook.topic, newBook.imageUrl, newBook.isAudio);
  }

  initBookToDelete(id:string, title:string) {
    this.bookToDelete.id = id;
    this.bookToDelete.title = title;
  }

  deleteBook() {
    this.books = this.storeroom.deleteBook(this.bookToDelete.id);
  }
}

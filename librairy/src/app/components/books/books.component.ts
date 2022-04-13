import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author/author';
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
  topics: string[] = ["Historique", "Policier", "Amour", "Espionnage", "Science-fiction", "Fantasy", "Biographie", "Conte", "Nouvelles", "Pédagogie", "Autre"];
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
    this.storeroom.getAuthors().subscribe(data => {
      this.authors = data.map((author: Author) => author.firstname+' '+author.lastname);
    })
    this.getBooks();
  }

  getBooks() {
    this.storeroom.getBooks().subscribe(data => {
      this.books = data;
    })
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
      this.storeroom.addBook(newBook.title, newBook.author, newBook.releaseDate, newBook.topic, newBook.imageUrl, newBook.isAudio).subscribe(data => {
        this.getBooks();
      })
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
      this.storeroom.updateBook(newBook.id, newBook.title, newBook.author, newBook.releaseDate, newBook.topic, newBook.imageUrl, newBook.isAudio).subscribe(data => {
        this.getBooks();
      })
    }

  initBookToDelete(id:string, title:string) {
    this.bookToDelete.id = id;
    this.bookToDelete.title = title;
  }

  deleteBook() {
    this.storeroom.deleteBook(this.bookToDelete.id).subscribe(data => {
      this.getBooks();
    })
  }
}

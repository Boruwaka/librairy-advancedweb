import { Injectable } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { Book } from 'src/app/models/book/book';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreroomService {
  books: Book[] = [];
  authors: Author[] = [];
  apiURL: String = "http://localhost:8092";

  constructor(private http: HttpClient) {}

  addBook(
    title:string,
    author:string,
    releaseDate:number,
    topic:string,
    imageUrl:string,
    isAudio:boolean) {
      return this.http.post<any>(this.apiURL+'/books/', {
        'title': title,
        'author': author,
        'releaseDate': releaseDate,
        'topic': topic, 
        'imageUrl': imageUrl,
        'isAudio': isAudio
      });
  }

  getBooks() {
    return this.http.get<any>(this.apiURL+'/books/');
  }

  deleteBook(id:string) {
    return this.http.delete<any>(this.apiURL+'/books/'+id);
  }

  updateBook(
    id:string,
    title:string,
    author:string,
    releaseDate:number=new Date().getFullYear(),
    topic:string="",
    imageUrl:string="",
    isAudio:boolean= false) {
      return this.http.put<any>(this.apiURL+'/books/'+id, {
        'title': title,
        'author': author,
        'releaseDate': releaseDate,
        'topic': topic, 
        'imageUrl': imageUrl,
        'isAudio': isAudio
      });
  }

  addAuthor(
    firstname:string,
    lastname:string,
    isAlive:boolean) {
      return this.http.post<any>(this.apiURL+'/authors/', {
        'firstname': firstname,
        'lastname': lastname, 
        'isAlive': isAlive
      });
  }

  updateAuthor(
    id:string,
    firstname:string,
    lastname:string,
    isAlive:boolean) {
      return this.http.put<any>(this.apiURL+'/authors/'+id, {
        'firstname': firstname,
        'lastname': lastname, 
        'isAlive': isAlive
      });
  }

  getAuthors() {
    return this.http.get<any>(this.apiURL+'/authors/');
  }

  deleteAuthor(id:string) {
    return this.http.delete<any>(this.apiURL+'/authors/'+id);
  }
}

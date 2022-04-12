import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { StoreroomService } from 'src/app/services/storeroom/storeroom.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  isUpdating: boolean = false;
  authors: Author[] = [];
  newAuthor: {
    id:string,
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean
  } = {
    id: "",
    firstname: "",
    lastname: "",
    birthdate: '2000-01-01',
    isAlive: true
  }
  authorToDelete: {id:string, fullname: string} = {
    id: '',
    fullname: ''
  };
  storeroom: StoreroomService;

  constructor(storeroom: StoreroomService) {
    this.storeroom = storeroom;
  }

  ngOnInit(): void {
    this.authors = this.storeroom.getAuthors();
  }

  initAuthorCreate() {
    this.isUpdating = false;
    this.newAuthor = {
      id: "",
      firstname: "",
      lastname: "",
      birthdate: '2000-01-01',
      isAlive: true
    }
  }

  addAuthor(newAuthor: {
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean}): void {
      this.authors = this.storeroom.addAuthor(newAuthor.firstname, newAuthor.lastname, newAuthor.birthdate, newAuthor.isAlive);
  }

  initAuthorToUpdate(author:Author) {
    this.isUpdating = true;
    this.newAuthor = {
      id: author.id,
      firstname: author.firstname,
      lastname: author.lastname,
      birthdate: author.birthdate,
      isAlive: author.isAlive
    };
  }

  updateAuthor(newAuthor: {
    id: string,
    firstname:string,
    lastname:string,
    birthdate:string,
    isAlive:boolean
  }) {
    this.authors = this.storeroom.updateAuthor(newAuthor.id, newAuthor.firstname, newAuthor.lastname, newAuthor.birthdate, newAuthor.isAlive);
  }

  initAuthorToDelete(id:string, fullname:string) {
    this.authorToDelete.id = id;
    this.authorToDelete.fullname = fullname;
  }

  deleteAuthor() {
    this.authors = this.storeroom.deleteAuthor(this.authorToDelete.id);
  }
}

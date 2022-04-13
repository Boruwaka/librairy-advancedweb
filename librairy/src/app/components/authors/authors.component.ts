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
    isAlive:boolean
  } = {
    id: "",
    firstname: "",
    lastname: "",
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
    this.getAuthors();
  }

  getAuthors() {
    this.storeroom.getAuthors().subscribe(data => {
      this.authors = data;
    })
  }

  initAuthorCreate() {
    this.isUpdating = false;
    this.newAuthor = {
      id: "",
      firstname: "",
      lastname: "",
      isAlive: true
    }
  }

  addAuthor(newAuthor: {
    firstname:string,
    lastname:string,
    isAlive:boolean}): void {
    this.storeroom.addAuthor(newAuthor.firstname, newAuthor.lastname, newAuthor.isAlive).subscribe(data => {
      this.getAuthors();
    })
  }

  initAuthorToUpdate(author:Author) {
    this.isUpdating = true;
    this.newAuthor = {
      id: author.id,
      firstname: author.firstname,
      lastname: author.lastname,
      isAlive: author.isAlive
    };
  }

  updateAuthor(newAuthor: {
    id: string,
    firstname:string,
    lastname:string,
    isAlive:boolean
  }) {
    this.storeroom.updateAuthor(newAuthor.id, newAuthor.firstname, newAuthor.lastname, newAuthor.isAlive).subscribe(data => {
      this.getAuthors();
    })
  }

  initAuthorToDelete(id:string, fullname:string) {
    this.authorToDelete.id = id;
    this.authorToDelete.fullname = fullname;
  }

  deleteAuthor() {
    this.storeroom.deleteAuthor(this.authorToDelete.id).subscribe(data => {
      this.getAuthors();
    })
  }
}

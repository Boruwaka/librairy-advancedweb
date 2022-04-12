import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/default/app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';

import { StoreroomService } from './services/storeroom/storeroom.service';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: '**', redirectTo: 'books', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StoreroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }

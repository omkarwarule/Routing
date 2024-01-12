import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { InvalidComponent } from './invalid/invalid.component';
export const routes: Routes = [
 {path:'Tech',component:TechnologiesComponent},
 {path:'Book',component:BooksComponent},
 {path:'',component:HomeComponent},
 {path:'**',component:InvalidComponent}
];

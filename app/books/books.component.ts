import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent 
{
  public Technologies:any=
  [
    {Name:"Angular",Book:"ProAngular by sir adam freeman"},
    {Name:"Node Js",Book:"Node js Design Patterns"},
    {Name:"Android",Book:"Head First Android"},
    {Name:"Big Data Analytics",Book:"Data Analytics Made accessible"},
    {Name:"Artificial Intelligence",Book:"Life 3.0"}
]
}

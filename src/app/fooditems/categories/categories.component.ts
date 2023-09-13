import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories:Category[]=[
    new Category('Dairy',"assets/images/diary.jpg"),
    new Category('Breads',"assets/images/breads.jpeg"),
    new Category('HerbsAndSpices',"assets/images/herbsandspices.jpeg"),
    new Category('Beverages',"assets/images/beverages.jpeg"),
  ];
  constructor(){}

  ngOnInit(): void {
    
  }

}

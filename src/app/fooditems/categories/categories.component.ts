import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories:Category[]=[
    new Category('Dairy',"https://media.istockphoto.com/id/1451272680/photo/fresh-dairy-products.jpg?s=1024x1024&w=is&k=20&c=5AksVnZVDWRx7SX6meYSYo2kE_dst5i9iOSsyWd8PP8="),
    new Category('Breads',"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"),
    new Category('HerbsAndSpices',"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVyYnMlMjBhbmQlMjBzcGljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"),
    new Category('Beverages',"https://images.unsplash.com/photo-1625865019554-220ea80ea813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmV2ZXJhZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"),
  ];
  constructor(){}

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/shared/models/Category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) {
    this.categories = categoriesService.getAllCategories();
  }

  ngOnInit(): void {}
}

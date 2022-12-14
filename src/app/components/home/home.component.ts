import { Component, ElementRef } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ResizeableComponent } from '../resizeable/resizeable.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ResizeableComponent {

  categories: Category[] = [];
  colors: string[] = ['rgba(255,0,0,0.5)', 'rgba(255,127,0,0.5)', 'rgba(255,255,0,0.5)',
    'rgba(0,255,0,0.5)', 'rgba(0,255,255,0.5)', 'rgba(0,0,255,0.5)', 'rgba(255,0,255,0.5)'];

  constructor(el: ElementRef, categoryService: CategoryService) {
    super(el);
    this.categories = categoryService.getCategories();
  }

  getTileWidth(): number {
    return 300;
  }

  getRowHeight(): number {
    return 200;
  }

}

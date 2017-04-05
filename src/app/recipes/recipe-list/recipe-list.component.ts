import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
new Recipe('A test', "a test desc",
'https://cdn.pixabay.com/photo/2016/10/05/17/11/recipe-1717162_960_720.png'  )
  ,
  new Recipe('A test', "a test desc",
  'https://cdn.pixabay.com/photo/2016/10/05/17/11/recipe-1717162_960_720.png'  )
];
  constructor() { }

  ngOnInit() {
  }

}

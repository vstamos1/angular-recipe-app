import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('Chocolate Chip Cookies', "a Chocolate Chip Cookies recipe",
  'http://www.godine.co.uk/blog/wp-content/uploads/2009/08/chocolate-chip-cookie-recipe.jpg'  )
  ,
  new Recipe('A new Chocolate Chip Cookie', "another Chocolate Chip Cookies recipe",
  'http://www.godine.co.uk/blog/wp-content/uploads/2009/08/chocolate-chip-cookie-recipe.jpg'  )
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

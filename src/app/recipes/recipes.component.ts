import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  showRecipeDetails(recipe: Recipe) {
    console.log('Recipes Component ' + this.recipe);
    this.recipe = recipe;
  }
}

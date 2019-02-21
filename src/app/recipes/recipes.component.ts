import { RecipeService } from './services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: []
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      });
  }
  // showRecipeDetails(recipe: Recipe) {
  //   console.log('Recipes Component ' + this.recipe);
  //   this.recipe = recipe;
  // }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('recipe') recipe: Recipe;
  // tslint:disable-next-line:no-output-rename
  @Output('onRecipeDetailClick') recipeItemEvent = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClick() {
    console.log('Recipe Item', this.recipe);
    this.recipeItemEvent.emit(this.recipe);
  }
}

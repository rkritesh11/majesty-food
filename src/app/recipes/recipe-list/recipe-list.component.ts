import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('onRecipeItemClick') recipeItemEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe({
      name: 'A Test Recipe', description: 'This is simply a test',
      imagePath: '../../../../assets/images/salmon-518032_1280.jpg'
    }),
    new Recipe({
      name: 'Salmon', description: 'This is simple recipe',
      imagePath: '../../../../assets/images/salmon-3888823_1280.jpg'
    }),
    new Recipe({
      name: 'Salmon Tikka', description: 'This is simply a test',
      imagePath: '../../../../assets/images/salmon-518032_1280.jpg'
    }),
  ];
  constructor() { }

  ngOnInit() {
  }

  showRecipeDetail(input: Recipe) {
    console.log('Recipe list', input);
    this.recipeItemEvent.emit(input);
  }

}

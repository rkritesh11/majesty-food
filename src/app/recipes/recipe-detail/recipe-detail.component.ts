import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('recipeDetails') recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

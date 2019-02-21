import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  // providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('recipe') recipe: Recipe;

  // tslint:disable-next-line:no-input-rename
  @Input('index') index: number;
  // tslint:disable-next-line:no-output-rename
  // @Output('onRecipeDetailClick') recipeItemEvent = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onRecipeItemClick() {
    this.router.navigate([this.index], { relativeTo: this.activatedRoute });
  }
}

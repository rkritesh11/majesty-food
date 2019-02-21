import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  // providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  // @Output('onRecipeItemClick') recipeItemEvent = new EventEmitter<Recipe>();

  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeUpdated.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
    });
  }

  // showRecipeDetail(input: Recipe) {
  //   console.log('Recipe list', input);
  //   this.recipeItemEvent.emit(input);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}

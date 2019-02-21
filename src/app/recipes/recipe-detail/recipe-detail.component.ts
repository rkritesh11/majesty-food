import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from './../../shopping-list/services/shoppinglist.service';
import { RecipeService } from './../services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  // providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  recipe: Recipe;
  id: number;


  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const recipes = this.recipeService.getRecipes();
      this.id = +params['id'];
      this.recipe = recipes[this.id];
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}

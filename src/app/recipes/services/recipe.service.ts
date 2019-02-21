import { ShoppingListService } from './../../shopping-list/services/shoppinglist.service';
import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
    recipeUpdated = new EventEmitter<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe({
            name: 'A Test Recipe', description: 'This is simply a test',
            imagePath: '../../../../assets/images/salmon-518032_1280.jpg',
            ingredients: [
                new Ingredient({
                    name: 'Tomamtoes', amount: 20, quote: 'Save the Planet...Buy Organic',
                    quoteAuthor: 'Nancy Philips'
                }),
                new Ingredient({
                    name: 'Banana', amount: 15, quote: `When health is absent,
     wisdom cannot reveal itself, art cannot manifest,
     strength cannot fight, wealth becomes useless, and intelligence cannot be applied.`,
                    quoteAuthor: 'Herophilus'
                })
            ]
        }),
        new Recipe({
            name: 'Salmon', description: 'This is simple recipe',
            imagePath: '../../../../assets/images/salmon-3888823_1280.jpg',
            ingredients: [
                new Ingredient({
                    name: 'Tomamtoes', amount: 20, quote: 'Save the Planet...Buy Organic',
                    quoteAuthor: 'Nancy Philips'
                })
            ]
        }),
        new Recipe({
            name: 'Salmon Tikka', description: 'This is simply a test',
            imagePath: '../../../../assets/images/salmon-518032_1280.jpg',
            ingredients: [
                new Ingredient({
                    name: 'Tomamtoes', amount: 20, quote: 'Save the Planet...Buy Organic',
                    quoteAuthor: 'Nancy Philips'
                })
            ]
        }),
    ];
    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addingredients(ingredients.slice());
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeUpdated.emit(this.getRecipes());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeUpdated.emit(this.getRecipes());
    }

    getRecipe(index: number) {
        return this.getRecipes()[index];
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeUpdated.emit(this.getRecipes());
    }
}

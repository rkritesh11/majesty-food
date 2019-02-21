import { Ingredient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredientEdit = new EventEmitter<number>();

    private ingredients: Ingredient[] = [
        new Ingredient({
            name: 'Apple', amount: 60,
            quote: `Food is not simply organic fuel to keep body
     and soul together,
     it is a perishable art that must be savoured at the peak of perfection.`,
            quoteAuthor: 'E.A. Bucchianeri, Brushstrokes of a Gadfly'
        }),
        new Ingredient({
            name: 'Banana', amount: 15, quote: `When health is absent,
     wisdom cannot reveal itself, art cannot manifest,
     strength cannot fight, wealth becomes useless, and intelligence cannot be applied.`,
            quoteAuthor: 'Herophilus'
        }),
        new Ingredient({
            name: 'Tomamtoes', amount: 20, quote: 'Save the Planet...Buy Organic',
            quoteAuthor: 'Nancy Philips'
        }),
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.getIngredients()[index];
    }

    addingredient(ingedient: Ingredient) {
        this.ingredients.push(ingedient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addingredients(ingredients: Ingredient[]) {
        // for (const ingredient of ingredients) {
        //     this.ingredients.push(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.emit(this.getIngredients());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}

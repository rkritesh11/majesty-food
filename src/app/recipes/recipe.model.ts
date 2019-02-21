import { Ingredient } from './../shared/ingredient.model';
export interface Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];
}


export class Recipe implements Recipe {

    constructor(recipe: Recipe) {
        this.name = recipe.name;
        this.description = recipe.description;
        this.imagePath = recipe.imagePath;
        this.ingredients = recipe.ingredients;
    }
}

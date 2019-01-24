export interface Recipe {
    name: String;
    description: String;
    imagePath: String;
}


export class Recipe implements Recipe {

    constructor(recipe: Recipe) {
        this.name = recipe.name;
        this.description = recipe.description;
        this.imagePath = recipe.imagePath;
    }
}

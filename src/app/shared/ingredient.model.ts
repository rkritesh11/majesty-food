export interface Ingredient {
    name: String;
    amount: number;
    quote: String;
    quoteAuthor: String;
}


export class Ingredient implements Ingredient {
    constructor(ingredient: Ingredient) {
        this.name = ingredient.name;
        this.amount = ingredient.amount;
        this.quote = ingredient.quote;
        this.quoteAuthor = ingredient.quoteAuthor;
    }
}

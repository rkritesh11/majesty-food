import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
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

  ngOnInit() {
  }

  addItem(input: Ingredient) {
    this.ingredients.push(input);
  }

}

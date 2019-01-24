import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename
  @Output('addItemToShoppingList') addItemToShoppingListEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addItem(name: HTMLInputElement, amount: HTMLInputElement,
    quote: HTMLInputElement, quoteAuthor: HTMLInputElement) {
    this.addItemToShoppingListEvent.emit(new Ingredient({
      name: name.value,
      amount: Number.parseInt(amount.value, 10),
      quote: quote.value,
      quoteAuthor: quoteAuthor.value
    }));
  }

}

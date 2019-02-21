import { Component, OnInit, } from '@angular/core';

import { ShoppingListService } from './services/shoppinglist.service';
import { Ingredient } from './../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shopppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopppingListService.getIngredients();
    this.shopppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  // addItem(input: Ingredient) {
  //   this.ingredients.push(input);
  // }

  editItem(index: number) {
    this.shopppingListService.ingredientEdit.emit(index);
  }

}

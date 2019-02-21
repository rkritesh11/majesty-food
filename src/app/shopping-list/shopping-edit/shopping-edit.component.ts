import { ShoppingListService } from './../services/shoppinglist.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-output-rename
  // @Output('addItemToShoppingList') addItemToShoppingListEvent = new EventEmitter<Ingredient>();
  @ViewChild('form') form: NgForm;
  subscription: Subscription;
  editMode = false;
  index: number;

  constructor(private shopppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopppingListService.ingredientEdit.subscribe((i: number) => {
      this.editMode = true;
      this.index = i;
      const ingredient = this.shopppingListService.getIngredient(i);
      this.form.setValue({
        name: ingredient.name,
        amount: ingredient.amount,
        quote: ingredient.quote? ingredient.quote: '',
        author: ingredient.quoteAuthor? ingredient.quoteAuthor: ''
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addItem(formData: NgForm) {
    const ingredient = this.constructIngredient(formData);
    if (this.editMode) {
      this.updateIngredient(ingredient);
    } else {
      this.shopppingListService.addingredient(ingredient);
    }
    this.editMode = false;
    formData.reset();
  }

  updateIngredient(newIngredient: Ingredient) {
    this.shopppingListService.updateIngredient(this.index, newIngredient);
  }

  constructIngredient(formData: NgForm) {
    const ingredient = new Ingredient({
      name: formData.value.name,
      amount: Number.parseInt(formData.value.amount, 10),
      quote: formData.value.quote,
      quoteAuthor: formData.value.author
    });
    return ingredient;
  }

  delete() {
    this.clear();
    this.shopppingListService.deleteIngredient(this.index);
  }

  clear() {
    this.editMode = false;
    this.form.reset();
  }
}

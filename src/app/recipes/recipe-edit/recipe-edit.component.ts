import { Recipe } from './../recipe.model';
import { RecipeService } from './../services/recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    const ingredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(
              ingredient.amount,
              [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
            )
          }));

        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'ingredients': ingredients
    });

    console.log(this.recipeForm);
  }

  updateRecipe(newRecipe: Recipe) {
    this.recipeService.updateRecipe(this.id, newRecipe);
  }

  submitForm() {
    const recipe = this.recipeForm.value;
    if (this.editMode) {
      this.updateRecipe(recipe);
    } else {
      this.addRecipe(recipe);
    }
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  addRecipe(recipe: Recipe) {
    this.recipeService.addRecipe(recipe);
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });

  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(
        null,
        [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
      )
    }));
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}

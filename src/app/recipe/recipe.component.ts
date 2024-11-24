import { Component, inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../service/recipes.service';
import { CreateRecipeDto } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})

export class RecipeComponent{

  private readonly fb = inject(FormBuilder);
  private readonly recipesService = inject(RecipesService);

  recipe = this.fb.nonNullable.group({
    name: '',
    preparationTime: 0,
    portion: 0,
    calories: 0,
    description: '',
    categoryId: 0,
    score: 0
  })


  createRecipe(){
    this.recipesService.createRecipe({...this.recipe.value, category: {id: this.recipe.value.categoryId}} as CreateRecipeDto).subscribe();
  }

}

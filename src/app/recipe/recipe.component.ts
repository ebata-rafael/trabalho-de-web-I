import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../service/recipes.service';
import { CreateRecipeDto } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  private readonly fb = inject(FormBuilder);
  private readonly recipesService = inject(RecipesService);

  recipe = this.fb.nonNullable.group({
    name: '',
    preparationTime: 0,
    portion: 0,
    calories: 0,
    description: '',
    categoryId: 0,
    score: 0,
    ingredientes: this.fb.array([]),
  });

  createRecipe() {
    this.recipesService.createRecipe({
      name: this.recipe.value.name,
      preparationTime: this.recipe.value.preparationTime,
      portion: this.recipe.value.portion,
      calories: this.recipe.value.calories,
      description: this.recipe.value.description,
      category: { id: this.recipe.value.categoryId },} as CreateRecipeDto)
    .subscribe({
      next: (resp)=>{
      },
      error: ()=>{
        if(this.ingredientes.length > 0){
          (this.ingredientes.controls as FormGroup[]).forEach((grupo: FormGroup) => {
            const nome = grupo.get('teste')?.value;
            const quantidade = +grupo.get('quantidade')?.value;
            const tipo = grupo.get('tipo')?.value;
            console.log(`Nome = ${nome}, Quantidade = ${quantidade}, Tipo = ${tipo}`); })
        }
      }
    });
  }

  get ingredientes(): FormArray {
    return this.recipe.get('ingredientes') as FormArray;
  }

  addIngrediente() {
    this.ingredientes.push(this.fb.nonNullable.group({
      teste: '',
      quantidade: 0,
      tipo: ''
    }));
  }

  removeIngrediente(index: number) {
    this.ingredientes.removeAt(index);
  }
}

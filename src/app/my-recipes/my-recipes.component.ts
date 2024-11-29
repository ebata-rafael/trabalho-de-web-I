import { Component, inject } from '@angular/core';
import { RecipesService } from '../service/recipes.service';
import { RecipeResponse } from '../models/recipe.model';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.scss'
})
export class MyRecipesComponent {
  private readonly recipeService = inject(RecipesService);
  recipes!: RecipeResponse;
  currentPage: number = 1;

  ngOnInit(): void {
    this.recipeService.listMineRecipes(1,20).subscribe((result) => {
      this.recipes = result;
      this.currentPage = this.recipes.meta.currentPage
    });
  }

  getStars(score: number): Array<number> {
    return Array(score).fill(0);
  }
}

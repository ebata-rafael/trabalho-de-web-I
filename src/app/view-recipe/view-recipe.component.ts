import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from '../service/recipes.service';
import { RecipeResponse } from '../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.scss'
})
export class ViewRecipeComponent implements OnInit{
  private readonly recipeService = inject(RecipesService);
  recipes!: RecipeResponse;
  currentPage: number = 1;

  ngOnInit(): void {
    this.recipeService.list(1,1).subscribe((result) => {
      this.recipes = result;
      this.currentPage = this.recipes.meta.currentPage
    });
  }

  getStars(score: number): Array<number> {
    return Array(score).fill(0);
  }
}

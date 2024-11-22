import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from '../service/recipes.service';
import { RecipeResponse } from '../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit{

  private readonly recipeService = inject(RecipesService);


  recipes: RecipeResponse = { meta: { itemCount: 0, totalItems: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 }, items: [] };

  ngOnInit(): void {
    this.recipeService.list().subscribe((result) => {
      this.recipes = result;
    });

  }

  getStars(score: number): Array<number> {
    return Array(score).fill(0);
  }
}

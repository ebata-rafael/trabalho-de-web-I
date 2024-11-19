import { Component, inject, OnInit } from '@angular/core';
import { RecipeResponse } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})

export class RecipeComponent implements OnInit{

  private readonly recipeService = inject(RecipesService);


  recipes: RecipeResponse = { meta: { itemCount: 0, totalItems: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 }, items: [] };

  ngOnInit(): void {
    this.recipeService.list().subscribe((result) => {
      this.recipes = result;
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ReceitasService } from '../service/receitas.service';
import { RecipeResponse } from '../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.scss'
})

export class ReceitasComponent implements OnInit{

  private readonly recipeService = inject(ReceitasService);


  recipes: RecipeResponse = { meta: { itemCount: 0, totalItems: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 }, items: [] };

  ngOnInit(): void {
    this.recipeService.list().subscribe((result) => {
      this.recipes = result;
    });
  }
}

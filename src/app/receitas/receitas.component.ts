import { Component, inject } from '@angular/core';
import { ReceitasService } from '../service/receitas.service';
import { Recipe } from '../models/receita/recipe.model';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.scss'
})

export class ReceitasComponent {

  private readonly recipeService = inject(ReceitasService);

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipeService.list().subscribe((result) => {
      this.recipes = result;
    });
  }
}

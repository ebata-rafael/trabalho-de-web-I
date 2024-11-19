import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RecipesComponent } from "../recipes/recipes.component";
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RecipesComponent, RecipeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

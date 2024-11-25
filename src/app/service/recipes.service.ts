import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreateRecipeDto, Recipe, RecipeResponse } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private readonly API = environment.URL_BASE + '/recipes';
  private readonly http = inject(HttpClient);

  id?: number;

  list(page:number, limit:number): Observable<RecipeResponse> {
    // Define a quantidade de itens que serão retornados
    const params = new HttpParams().set("limit",limit).set('page', page);
    return this.http.get<RecipeResponse>(this.API,{params});
  }

  Id(page:number, limit:number, id: number): Observable<RecipeResponse> {

    const params = new HttpParams().set("limit",limit).set('page', page);
    return this.http.get<RecipeResponse>(this.API,{params});
  }

  createRecipe(recipe: CreateRecipeDto): Observable<Recipe>{
    return this.http.post<Recipe>(this.API, recipe);
  }
}

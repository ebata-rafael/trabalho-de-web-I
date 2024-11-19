import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RecipeResponse } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private readonly API = environment.URL_BASE + '/recipes';
  private readonly http = inject(HttpClient);

  list(): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(this.API);
  }
}

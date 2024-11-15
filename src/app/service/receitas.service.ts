import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Recipe } from '../models/receita/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  private readonly API = environment.URL_BASE + '/recipes';
  private readonly http = inject(HttpClient);

  list(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.API);
  }
}

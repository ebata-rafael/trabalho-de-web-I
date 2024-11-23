import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book, BookResponse, CreateBookDto } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API = environment.URL_BASE + '/books';
  private readonly http = inject(HttpClient);

  list(): Observable<BookResponse> {
    return this.http.get<BookResponse>(this.API);
  }

  createBook(name: string): Observable<Book>{
    return this.http.post<Book>(this.API, {name});
  }

  deleteBook(id: number): Observable<Book>{
    return this.http.delete<Book>(this.API + '/' + id);
  }

}

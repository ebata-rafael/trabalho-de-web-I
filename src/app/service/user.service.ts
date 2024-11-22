import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { CreateUserDto } from '../models/createUserDto.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly API = environment.URL_BASE + '/users';
  private readonly http = inject(HttpClient);

  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.API, user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>('https://reqres.in/api/login', {
      email,
      password
    }).pipe(
      tap(response => this.setSession(response)) 
    );
  }

  private setSession(authResult) {
    localStorage.setItem('id_token', authResult.token);
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}

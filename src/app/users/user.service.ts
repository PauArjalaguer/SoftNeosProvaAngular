import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Error 7: URL hardcodeada
  private apiUrl = 'http://localhost:8000/users';

  constructor(private http: HttpClient) { }

  // Error 8: No manejo de errores en las solicitudes HTTP
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Error 9: Datos sin validación
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}


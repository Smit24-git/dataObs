import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from '../../models/user.models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = environment.api + '/auth/login/';

  private http = inject(HttpClient);

  constructor() { }


  public authenticate(req: AuthRequest): Observable<AuthResponse> {
    console.log(this.authURL);
    return this.http.post<AuthResponse>(this.authURL, req);
  }
}

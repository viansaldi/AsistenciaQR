import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }
  
  apiURL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }
  
  /**
   * Method get users from public API, don't receive in parameters.
   * @returns 
   */
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiURL+'/users/');
  }
}

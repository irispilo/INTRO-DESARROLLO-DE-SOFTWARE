import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class Apis {
  private apiUrl = "https://api.github.com/users/irispilo/repos"


  constructor(private http: HttpClient){}
  getRepos(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }  

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContributionsApi {
  private apiUrl = 'https://api.github.com/orgs/alejandro-ufm/repos';

  constructor(private http: HttpClient) {}

  getSharedRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
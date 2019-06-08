import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(
    protected httpClient: HttpClient
  ) {
  }

  getResults(): Observable<string[]> {
    return this.httpClient.get<string[]>('assets/suggestions.json');
  }
}

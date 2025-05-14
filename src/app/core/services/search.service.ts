// src/app/core/services/search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Provided in root, so it's a singleton
})
export class SearchService {
  // BehaviorSubject to hold the current search term and provide an initial value.
  private searchTermSource = new BehaviorSubject<string>('');

  // Observable that components can subscribe to for search term updates.
  public searchTerm$: Observable<string> = this.searchTermSource.asObservable();

  constructor() { }

  /**
   * Updates the current search term.
   * @param term The new search term string.
   */
  setSearchTerm(term: string): void {
    this.searchTermSource.next(term);
  }
}
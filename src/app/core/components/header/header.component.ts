// src/app/core/components/header/header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service'; 

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  // Subject to handle search input changes with debounce
  private searchInputSubject = new Subject<string>();

  constructor(private searchService: SearchService) {
    // Apply debounce to search input to avoid excessive service calls
    this.searchInputSubject.pipe(
      debounceTime(300), // Wait for 300ms pause in events
      distinctUntilChanged() // Only emit if value has changed
    ).subscribe(searchTerm => {
      this.searchService.setSearchTerm(searchTerm);
    });
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  /**
   * Called when the search input value changes.
   * Pushes the new value to the searchInputSubject.
   * @param event The input event containing the search term.
   */
  onSearchInputChange(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchInputSubject.next(searchTerm);
  }
}
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

interface Notification {
  id: string;
  message: string;
  icon: string;
  read: boolean;
  date: Date;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() sidenav: MatSidenav | undefined;

  // Search functionality
  private searchInputSubject = new Subject<string>();
  searchExpanded = false;
  
  // Responsive behavior
  isSmallScreen = false;
  
  // Breadcrumb functionality
  showBreadcrumbs = true;
  breadcrumbs: Breadcrumb[] = [];
  
  // User information
  userName = 'Admin User';
  userEmail = 'admin@example.com';
  userPhotoUrl: string | null = null;
  get userInitials(): string {
    return this.userName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
  
  // Notifications
  notificationCount = 3;
  mockNotifications: Notification[] = [
    {
      id: '1',
      message: 'New room booking request',
      icon: 'event_available',
      read: false,
      date: new Date()
    },
    {
      id: '2',
      message: 'Maintenance completed for Room A101',
      icon: 'build',
      read: false,
      date: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
    },
    {
      id: '3',
      message: 'System update scheduled for tonight',
      icon: 'system_update',
      read: false,
      date: new Date(Date.now() - 1000 * 60 * 60 * 3) // 3 hours ago
    }
  ];
  
  // Subscriptions for cleanup
  private breakpointSubscription: Subscription | undefined;
  private routerSubscription: Subscription | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Apply debounce to search input to avoid excessive service calls
    this.searchInputSubject.pipe(
      debounceTime(300), // Wait for 300ms pause in events
      distinctUntilChanged() // Only emit if value has changed
    ).subscribe(searchTerm => {
      this.searchService.setSearchTerm(searchTerm);
    });
  }

  ngOnInit(): void {
    // Monitor screen size changes
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        
        // Close search on screen size change if it's expanded
        if (this.searchExpanded && !this.isSmallScreen) {
          this.searchExpanded = false;
        }
      });
    
    // Generate breadcrumbs on route changes
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this.route.root))
      )
      .subscribe(breadcrumbs => {
        this.breadcrumbs = breadcrumbs;
      });
  }

  // Cleanup subscriptions
  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Toggle sidenav using the reference passed from parent
  toggleSidenav(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  // Toggle search expansion on mobile
  toggleSearch(): void {
    this.searchExpanded = !this.searchExpanded;
  }

  // Handle search input
  onSearchInputChange(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchInputSubject.next(searchTerm);
  }

  // Mock logout function
  onLogout(): void {
    console.log('Logging out...');
  }

  // Build breadcrumbs from route data
  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    // Get route data
    const routeData = route.snapshot.data;
    const routeUrl = route.snapshot.url.map(segment => segment.path).join('/');
    
    // Build URL
    const currentUrl = routeUrl ? `${url}/${routeUrl}` : url;
    
    // If the route has a breadcrumb title, add it to breadcrumbs
    if (routeData['title']) {
      breadcrumbs.push({
        label: routeData['title'],
        url: currentUrl
      });
    }
    
    // Continue with child routes
    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, currentUrl, breadcrumbs);
    }
    
    return breadcrumbs;
  }
}
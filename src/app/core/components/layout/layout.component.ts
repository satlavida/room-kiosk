import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isSmallScreen = false;
  contentPadding = true;
  showFooter = true;
  private breakpointSubscription: Subscription | undefined;
  private routerSubscription: Subscription | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Monitor screen size changes
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        
        // If transitioning to small screen and sidenav is in side mode, close it
        if (this.isSmallScreen && this.sidenav?.mode === 'side' && this.sidenav?.opened) {
          this.sidenav.close();
        }
        
        // If transitioning to large screen and sidenav is closed, open it
        if (!this.isSmallScreen && this.sidenav?.mode === 'side' && !this.sidenav?.opened) {
          this.sidenav.open();
        }
      });
    
    // Close sidenav after navigation on small screens
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.isSmallScreen && this.sidenav?.opened) {
          this.sidenav.close();
        }
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

  // Toggle content padding (could be triggered from a settings service)
  toggleContentPadding(): void {
    this.contentPadding = !this.contentPadding;
  }

  // Detect escape key to close sidenav on small screens
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isSmallScreen && this.sidenav?.opened) {
      this.sidenav.close();
    }
  }
}
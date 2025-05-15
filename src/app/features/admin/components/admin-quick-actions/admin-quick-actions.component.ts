import { Component, OnInit } from '@angular/core';

interface QuickAction {
  icon: string;
  label: string;
  description: string;
  routerLink?: string;
  color: string;
}

@Component({
  selector: 'app-admin-quick-actions',
  templateUrl: './admin-quick-actions.component.html',
  styleUrls: ['./admin-quick-actions.component.scss']
})
export class AdminQuickActionsComponent implements OnInit {
  quickActions: QuickAction[] = [
    {
      icon: 'add_business',
      label: 'Add Room',
      description: 'Create a new room listing',
      routerLink: '/admin/rooms/new',
      color: '#3f51b5'
    },
    {
      icon: 'event',
      label: 'Schedule Maintenance',
      description: 'Plan maintenance windows',
      routerLink: '/admin/maintenance/schedule',
      color: '#f44336'
    },
    {
      icon: 'assessment',
      label: 'Analytics',
      description: 'View detailed reports',
      routerLink: '/admin/analytics',
      color: '#4caf50'
    },
    {
      icon: 'settings',
      label: 'System Settings',
      description: 'Configure preferences',
      routerLink: '/admin/settings',
      color: '#ff9800'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
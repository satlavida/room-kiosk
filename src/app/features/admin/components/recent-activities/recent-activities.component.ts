import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../../models/admin.model';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss']
})
export class RecentActivitiesComponent implements OnInit {
  @Input() activities: Activity[] = [];

  constructor() { }

  ngOnInit(): void { }

  getActivityIcon(type: string): string {
    switch(type) {
      case 'booking': return 'event_available';
      case 'cancellation': return 'event_busy';
      case 'modification': return 'edit_calendar';
      case 'maintenance': return 'build';
      case 'checkin': return 'login';
      case 'checkout': return 'logout';
      default: return 'event_note';
    }
  }

  getActivityIconClass(type: string): string {
    switch(type) {
      case 'booking': return 'activity-booking';
      case 'cancellation': return 'activity-cancellation';
      case 'modification': return 'activity-modification';
      case 'maintenance': return 'activity-maintenance';
      case 'checkin': return 'activity-checkin';
      case 'checkout': return 'activity-checkout';
      default: return '';
    }
  }

  formatTimeAgo(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    // Convert to minutes, hours, days
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ago`;
    }
    if (hours > 0) {
      return `${hours}h ago`;
    }
    return `${minutes}m ago`;
  }
}
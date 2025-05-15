import { Component, OnInit } from '@angular/core';
import { StatCard, Activity, AdminTask, User, OccupancyData } from '../../models/admin.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  statCards: StatCard[] = [];
  recentActivities: Activity[] = [];
  adminTasks: AdminTask[] = [];
  users: User[] = [];
  occupancyData: OccupancyData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeMockData();
  }

  private initializeMockData(): void {
    // Mock statistics cards data
    this.statCards = [
      {
        title: 'Total Rooms',
        value: 48,
        icon: 'meeting_room',
        percentChange: 0,
        color: 'primary'
      },
      {
        title: 'Active Bookings',
        value: 156,
        icon: 'calendar_today',
        percentChange: 8.5,
        color: 'accent'
      },
      {
        title: 'Available Rooms',
        value: 32,
        icon: 'check_circle',
        percentChange: -5.2,
        color: 'info'
      },
      {
        title: 'Maintenance Issues',
        value: 7,
        icon: 'build',
        percentChange: 12.3,
        color: 'warn'
      }
    ];

    // Mock recent activities
    this.recentActivities = [
      {
        id: '1',
        type: 'booking',
        user: 'John Smith',
        room: 'Conference Room Alpha',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        description: 'Booked for team meeting',
        status: 'completed'
      },
      {
        id: '2',
        type: 'cancellation',
        user: 'Sarah Johnson',
        room: 'Training Hall Gamma',
        timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
        description: 'Cancelled workshop reservation',
        status: 'completed'
      },
      {
        id: '3',
        type: 'maintenance',
        user: 'Tech Support',
        room: 'Client Lounge Delta',
        timestamp: new Date(Date.now() - 1000 * 60 * 240), // 4 hours ago
        description: 'Projector repair scheduled',
        status: 'pending'
      },
      {
        id: '4',
        type: 'modification',
        user: 'Emma Wilson',
        room: 'Focus Booth Beta',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        description: 'Extended booking by 1 hour',
        status: 'completed'
      },
      {
        id: '5',
        type: 'checkin',
        user: 'Michael Chen',
        room: 'Small Meeting Room Epsilon',
        timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        description: 'Checked in for scheduled meeting',
        status: 'completed'
      }
    ];

    // Mock admin tasks
    this.adminTasks = [
      {
        id: '1',
        title: 'Review pending room requests',
        description: '5 new room booking requests require approval',
        priority: 'high',
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 3), // Due in 3 hours
        completed: false,
        assignedTo: 'Admin'
      },
      {
        id: '2',
        title: 'Schedule maintenance for Tech Park A rooms',
        description: 'Monthly maintenance check for 10 rooms',
        priority: 'medium',
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // Due in 2 days
        completed: false,
        assignedTo: 'Maintenance Team'
      },
      {
        id: '3',
        title: 'Update room amenities database',
        description: 'Add new equipment to inventory system',
        priority: 'low',
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // Due in 5 days
        completed: false,
        assignedTo: 'Admin'
      },
      {
        id: '4',
        title: 'Generate monthly usage report',
        description: 'Prepare room utilization statistics for management',
        priority: 'medium',
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24), // Due in 1 day
        completed: false,
        assignedTo: 'Admin'
      },
      {
        id: '5',
        title: 'Resolve user complaints',
        description: '3 users reported issues with the booking system',
        priority: 'high',
        dueDate: new Date(Date.now() + 1000 * 60 * 60 * 5), // Due in 5 hours
        completed: false,
        assignedTo: 'Support Team'
      }
    ];

    // Mock users data
    this.users = [
      {
        id: '1',
        name: 'John Smith',
        email: 'john.smith@example.com',
        role: 'Manager',
        department: 'Marketing',
        lastLogin: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        bookingsCount: 12,
        status: 'active'
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        role: 'Director',
        department: 'Finance',
        lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        bookingsCount: 8,
        status: 'active'
      },
      {
        id: '3',
        name: 'Michael Chen',
        email: 'michael.c@example.com',
        role: 'Team Lead',
        department: 'Engineering',
        lastLogin: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        bookingsCount: 15,
        status: 'active'
      },
      {
        id: '4',
        name: 'Emma Wilson',
        email: 'emma.w@example.com',
        role: 'Specialist',
        department: 'HR',
        lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        bookingsCount: 5,
        status: 'inactive'
      },
      {
        id: '5',
        name: 'Alex Rodriguez',
        email: 'alex.r@example.com',
        role: 'Analyst',
        department: 'Research',
        lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
        bookingsCount: 9,
        status: 'active'
      }
    ];

    // Mock room occupancy data
    this.occupancyData = [
      { room: 'Conference Alpha', occupancyRate: 78, bookingsCount: 42 },
      { room: 'Meeting Room Beta', occupancyRate: 65, bookingsCount: 35 },
      { room: 'Training Hall', occupancyRate: 45, bookingsCount: 18 },
      { room: 'Focus Booth', occupancyRate: 92, bookingsCount: 52 },
      { room: 'Client Lounge', occupancyRate: 55, bookingsCount: 25 }
    ];
  }
}
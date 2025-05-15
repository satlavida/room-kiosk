export interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  percentChange?: number;
  color: 'primary' | 'accent' | 'warn' | 'info';
}

export interface Activity {
  id: string;
  type: 'booking' | 'cancellation' | 'modification' | 'maintenance' | 'checkin' | 'checkout';
  user: string;
  room?: string;
  timestamp: Date;
  description: string;
  status?: 'completed' | 'pending' | 'cancelled';
}

export interface AdminTask {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: Date;
  completed: boolean;
  assignedTo?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  lastLogin: Date;
  bookingsCount: number;
  status: 'active' | 'inactive' | 'pending';
}

export interface OccupancyData {
  room: string;
  occupancyRate: number;
  bookingsCount: number;
}
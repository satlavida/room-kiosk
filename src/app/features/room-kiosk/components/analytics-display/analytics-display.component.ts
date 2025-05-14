// src/app/features/room-kiosk/components/analytics-display/analytics-display.component.ts
import { Component, OnInit } from '@angular/core';

interface ChartDataItem {
  label: string;
  value: number; // Percentage height for the bar (0-100)
  rawValue: string; // Actual data value for tooltip
}

@Component({
  selector: 'app-analytics-display',
  templateUrl: './analytics-display.component.html',
  styleUrls: ['./analytics-display.component.scss']
})
export class AnalyticsDisplayComponent implements OnInit {
  mockPercentageChange: number = 12;
  mockChartData: ChartDataItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mockChartData = [
    { label: 'Jan', value: 40, rawValue: '120 bookings' },
    { label: 'Feb', value: 55, rawValue: '165 bookings' },
    { label: 'Mar', value: 60, rawValue: '180 bookings' },
    { label: 'Apr', value: 45, rawValue: '135 bookings' },
    { label: 'May', value: 75, rawValue: '225 bookings' }, // This will be highlighted by CSS
    { label: 'Jun', value: 65, rawValue: '195 bookings' }
  ];
  }
}
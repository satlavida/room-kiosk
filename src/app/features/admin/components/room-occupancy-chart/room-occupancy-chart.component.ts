import { Component, Input, OnInit } from '@angular/core';
import { OccupancyData } from '../../models/admin.model';

@Component({
  selector: 'app-room-occupancy-chart',
  templateUrl: './room-occupancy-chart.component.html',
  styleUrls: ['./room-occupancy-chart.component.scss']
})
export class RoomOccupancyChartComponent implements OnInit {
  @Input() occupancyData: OccupancyData[] = [];

  constructor() { }

  ngOnInit(): void { }
}
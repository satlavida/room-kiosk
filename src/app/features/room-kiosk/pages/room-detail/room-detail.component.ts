// src/app/features/room-kiosk/pages/room-detail/room-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../models/room-kiosk.model';
// import { RoomService } from '../../services/room.service'; // Assuming a service

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  // styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  room: Room | undefined;
  roomId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private roomService: RoomService // For fetching actual data
  ) {}

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id');
    if (this.roomId) {
      // In a real app, fetch room by ID from a service
      // this.room = this.roomService.getRoomById(this.roomId);

      // Mocking finding the room from the existing list for now
      const mockRooms: Room[] = [ /* Paste your mock room array here or import it */
        { id: '101', name: 'Conference Room Alpha', capacity: 10, floor: '1', building: 'Tech Park A', amenities: ['Projector', 'Whiteboard', 'Video Conferencing'], status: 'available', description: 'Spacious room ideal for team meetings and presentations with modern AV equipment.', imageUrl: 'assets/images/room1.jpg' },
        { id: '102', name: 'Focus Booth Beta', capacity: 1, floor: '2', building: 'Innovation Hub', amenities: ['Desk', 'Ergonomic Chair'], status: 'occupied', description: 'A quiet single-person booth for focused work or private calls.', imageUrl: 'assets/images/room2.jpg' },
        { id: '103', name: 'Training Hall Gamma', capacity: 25, floor: 'G', building: 'Tech Park B', amenities: ['Projector', 'Sound System', 'Podium', 'Chairs'], status: 'available', description: 'Large hall suitable for training sessions, workshops, and seminars.'},
        { id: '104', name: 'Client Lounge Delta', capacity: 6, floor: '3', building: 'Innovation Hub', amenities: ['Sofa', 'Coffee Table', 'Guest Wi-Fi'], status: 'maintenance', description: 'Comfortable lounge area for informal client meetings or discussions.', imageUrl: 'assets/images/room4.jpg' },
        { id: '105', name: 'Small Meeting Room Epsilon', capacity: 4, floor: '1', building: 'Tech Park A', amenities: ['Whiteboard', 'Monitor'], status: 'available', description: 'Compact meeting room for small group discussions or quick huddles.'}
      ];
      this.room = mockRooms.find(r => r.id === this.roomId);
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate back to dashboard
  }
}
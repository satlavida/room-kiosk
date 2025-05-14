// src/app/features/room-kiosk/components/room-list/room-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room-kiosk.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = []; // For search functionality later

  constructor() { }

  ngOnInit(): void {
    // Mock data - replace with actual data service later
    this.rooms = [
      {
        id: '101', name: 'Conference Room Alpha', capacity: 10, floor: '1', building: 'Tech Park A',
        amenities: ['Projector', 'Whiteboard', 'Video Conferencing'], status: 'available',
        description: 'Spacious room ideal for team meetings and presentations with modern AV equipment.',
        //imageUrl: 'assets/images/room1.jpg' // Add room1.jpg to assets/images
      },
      {
        id: '102', name: 'Focus Booth Beta', capacity: 1, floor: '2', building: 'Innovation Hub',
        amenities: ['Desk', 'Ergonomic Chair'], status: 'occupied',
        description: 'A quiet single-person booth for focused work or private calls.',
        //imageUrl: 'assets/images/room2.jpg' // Add room2.jpg to assets/images
      },
      {
        id: '103', name: 'Training Hall Gamma', capacity: 25, floor: 'G', building: 'Tech Park B',
        amenities: ['Projector', 'Sound System', 'Podium', 'Chairs'], status: 'available',
        description: 'Large hall suitable for training sessions, workshops, and seminars.',
        // imageUrl: 'assets/images/room3.jpg'
      },
      {
        id: '104', name: 'Client Lounge Delta', capacity: 6, floor: '3', building: 'Innovation Hub',
        amenities: ['Sofa', 'Coffee Table', 'Guest Wi-Fi'], status: 'maintenance',
        description: 'Comfortable lounge area for informal client meetings or discussions.',
        //imageUrl: 'assets/images/room4.jpg' // Add room4.jpg to assets/images
      },
      {
        id: '105', name: 'Small Meeting Room Epsilon', capacity: 4, floor: '1', building: 'Tech Park A',
        amenities: ['Whiteboard', 'Monitor'], status: 'available',
        description: 'Compact meeting room for small group discussions or quick huddles.',
      }
    ];
    this.filteredRooms = [...this.rooms]; // Initialize filteredRooms
  }

  // Placeholder for search functionality later
  onSearch(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredRooms = [...this.rooms];
    } else {
      this.filteredRooms = this.rooms.filter(room =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (room.building && room.building.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  }
}
// src/app/features/room-kiosk/components/room-list/room-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from '../../models/room-kiosk.model';
import { SearchService } from '../../../../core/services/search.service'; // Import SearchService
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnDestroy {
  allRooms: Room[] = []; // Stores all rooms fetched initially
  filteredRooms: Room[] = [];
  private searchSubscription: Subscription | undefined;

  // Inject SearchService
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.initializeRooms(); // Fetch and set up rooms

    // Subscribe to search term changes
    this.searchSubscription = this.searchService.searchTerm$.subscribe(term => {
      this.filterRooms(term);
    });
  }

  initializeRooms(): void {
    // Mock data - replace with actual data service later
    this.allRooms = [
      {
        id: '101', name: 'Conference Room Alpha', capacity: 10, floor: '1', building: 'Tech Park A',
        amenities: ['Projector', 'Whiteboard', 'Video Conferencing'], status: 'available',
        description: 'Spacious room ideal for team meetings and presentations with modern AV equipment.',
        //imageUrl: 'assets/images/room1.jpg'
      },
      {
        id: '102', name: 'Focus Booth Beta', capacity: 1, floor: '2', building: 'Innovation Hub',
        amenities: ['Desk', 'Ergonomic Chair'], status: 'occupied',
        description: 'A quiet single-person booth for focused work or private calls.',
        //imageUrl: 'assets/images/room2.jpg'
      },
      {
        id: '103', name: 'Training Hall Gamma', capacity: 25, floor: 'G', building: 'Tech Park B',
        amenities: ['Projector', 'Sound System', 'Podium', 'Chairs'], status: 'available',
        description: 'Large hall suitable for training sessions, workshops, and seminars.',
      },
      {
        id: '104', name: 'Client Lounge Delta', capacity: 6, floor: '3', building: 'Innovation Hub',
        amenities: ['Sofa', 'Coffee Table', 'Guest Wi-Fi'], status: 'maintenance',
        description: 'Comfortable lounge area for informal client meetings or discussions.',
        //imageUrl: 'assets/images/room4.jpg'
      },
      {
        id: '105', name: 'Small Meeting Room Epsilon', capacity: 4, floor: '1', building: 'Tech Park A',
        amenities: ['Whiteboard', 'Monitor'], status: 'available',
        description: 'Compact meeting room for small group discussions or quick huddles.',
      }
    ];
    // Initially display all rooms or apply initial search term if any
    this.filterRooms(''); // Or get initial term from service if needed
  }

  /**
   * Filters the rooms based on the search term.
   * @param searchTerm The string to filter rooms by.
   */
  filterRooms(searchTerm: string): void {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredRooms = [...this.allRooms];
    } else {
      this.filteredRooms = this.allRooms.filter(room =>
        room.name.toLowerCase().includes(term) ||
        room.description.toLowerCase().includes(term) ||
        (room.building && room.building.toLowerCase().includes(term)) ||
        (room.floor && room.floor.toLowerCase().includes(term)) ||
        (room.amenities && room.amenities.some(amenity => amenity.toLowerCase().includes(term)))
      );
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
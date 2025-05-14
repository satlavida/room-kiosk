import { Component, Input } from '@angular/core';
import { Room } from '../../models/room-kiosk.model';
@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent {
  @Input() room: Room | undefined;
}

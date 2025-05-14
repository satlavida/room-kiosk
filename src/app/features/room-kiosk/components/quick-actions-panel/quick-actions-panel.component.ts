// src/app/features/room-kiosk/components/quick-actions-panel/quick-actions-panel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-actions-panel',
  templateUrl: './quick-actions-panel.component.html',
  styleUrls: ['./quick-actions-panel.component.scss']
})
export class QuickActionsPanelComponent {

  constructor() { }

  onActionClick(action: string): void {
    console.log(`Quick action clicked: ${action}`);
    // if (action === 'favorites') { this.router.navigate(['/my-favorites']); }
  }
}
// src/app/features/room-kiosk/components/call-to-action-footer/call-to-action-footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action-footer',
  templateUrl: './call-to-action-footer.component.html',
  styleUrls: ['./call-to-action-footer.component.scss']
})
export class CallToActionFooterComponent {

  constructor() { }

  onCallToAction(): void {
    // Placeholder for the actual action
    console.log('Call to action button clicked!');
    // Example: this.router.navigate(['/booking']);
  }
}
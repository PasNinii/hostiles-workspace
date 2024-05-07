import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout.component';

@Component({
  selector: 'hostiles-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: ` <hostiles-main-layout /> `,
})
export class AppComponent {}

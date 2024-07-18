import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'hostiles-home',
  standalone: true,
  imports: [],
  template: `<p>Welcome home</p>`,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

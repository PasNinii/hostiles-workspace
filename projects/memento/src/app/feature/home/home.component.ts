import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hostiles-home',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Welcome to digest App</p>`,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

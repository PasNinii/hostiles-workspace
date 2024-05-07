import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'hostiles-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  imports: [
    // template context (everything we have used in the template...)
    // Angular
    TitleCasePipe,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    // material
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MainLayoutComponent {}

import { TitleCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';

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
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class MainLayoutComponent {
  public readonly router = inject(Router);
  public readonly isDigestPage = signal<boolean>(false);

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        tap((event: NavigationEnd) =>
          this.isDigestPage.set(event.url.includes('digest')),
        ),
        takeUntilDestroyed(),
      )
      .subscribe();
  }
}

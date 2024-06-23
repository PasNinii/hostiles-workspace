import { TitleCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// eslint-disable-next-line boundaries/element-types
import digestRoutes, { ExtendedRoute } from '../feature/digest/digest.routes';
// eslint-disable-next-line boundaries/element-types
import { routes } from '../app.routes';

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
  public readonly route = inject(ActivatedRoute);

  public readonly hostilesRoute = signal<Routes | undefined>(
    routes.filter((route) => route.title),
  );

  public readonly isDigestPage = signal<boolean>(false);
  public readonly digestChildrenRoute = signal<ExtendedRoute[] | undefined>(
    digestRoutes[0].children,
  );

  public readonly layout = signal<string | undefined>(undefined);

  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly breakpointStateMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.layout.set(this.breakpointStateMap.get(query));
          }
        }
      });

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        tap((event: NavigationEnd) =>
          this.isDigestPage.set(event.url.includes('/digest')),
        ),
        takeUntilDestroyed(),
      )
      .subscribe();
  }
}

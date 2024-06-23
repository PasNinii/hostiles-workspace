import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hostiles-digest-stat',
  template: `<h1>Digest Stat</h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigestStatComponent {}

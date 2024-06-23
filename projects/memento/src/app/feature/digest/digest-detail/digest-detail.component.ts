import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hostiles-digest-detail',
  template: `<h1>Digest Detail</h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigestDetailComponent {}

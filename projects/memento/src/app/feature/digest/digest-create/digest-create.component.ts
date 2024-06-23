import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hostiles-digest-create',
  standalone: true,
  template: `<h1>Digest Create</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigestCreateComponent {}

import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  template: `
    @for (item of entities(); track item) {
      <div>{{ item.name }}</div>
    }
  `,
})
export class DigestListComponent {
  entities = signal([
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id: 4, name: 'Fourth' },
    { id: 5, name: 'Fifth' },
    { id: 6, name: 'Sixth' },
    { id: 7, name: 'Seventh' },
    { id: 8, name: 'Eighth' },
    { id: 9, name: 'Ninth' },
    { id: 10, name: 'Tenth' },
  ]);
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 [ngClass]="['w-full h-[600px]', cssClass]">
      Hello Word
    </h1>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();
    while( Date.now() - start < 3000) {}
    console.log('Loaded');
  }
}
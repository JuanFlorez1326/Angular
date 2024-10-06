import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ 
    CommonModule,
    TitleComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="this.currentFw()"></app-title>
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <!-- <pre>{{ frameworkAsProperty | json }}</pre> -->
  `
})
export default class ChangeDetectionComponent {

  public currentFw = computed( 
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  // Without ZoneJS and with Signals

  public frameworkAsSignal =  signal({
    name: 'Angular',
    releaseDate: 2016
  });

  constructor() {
    setTimeout( () => {
      this.frameworkAsSignal.update( value => ({
        ...value, name: 'React'
      }));
    }, 3000);
  }



  // ZoneJS
  
  // ZoneJS -> He is aware of the changes and is aware of staying in sync. 
  // public frameworkAsProperty = {
  //   name: 'Angular',
  //   releaseDate: 2016
  // };

  // Example ZoneJS -> Traditional way of working Angular
  // constructor() {
  //   setTimeout( () => {
  //     this.frameworkAsProperty.name = 'React'
  //     console.log('Ok');
  //   }, 3000);
  // }
}
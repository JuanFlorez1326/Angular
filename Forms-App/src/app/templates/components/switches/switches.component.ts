import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  terms: boolean = false

  user = {
    gender: 'M',
    notifications: true
  }
}
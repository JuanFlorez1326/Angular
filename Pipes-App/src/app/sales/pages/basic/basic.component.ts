import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {

  nameLower: string = 'juan';
  nameUpper: string = 'JUAN';
  fullName: string = 'jUaN fLorEz';


  date: Date = new Date();
}
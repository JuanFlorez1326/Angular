import { Component } from '@angular/core';
import { MenuItems } from '../interfaces/menu-items.interface';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [` li { cursor: pointer } `]
})
export class SidemenuComponent {

  authMenu: MenuItems[] = [
    {
      text: 'register',
      route: './auth/register'
    }
  ];

  templateMenu: MenuItems[] = [
    {
      text: 'basics',
      route: './template/basics'
    },
    {
      text: 'dynamics',
      route: './template/dynamics'
    },
    {
      text: 'switches',
      route: './template/switches'
    }
  ]
  
  reactiveMenu: MenuItems[] = [
    {
      text: 'basics',
      route: './reactive/basics'
    },
    {
      text: 'dynamics',
      route: './reactive/dynamics'
    },
    {
      text: 'switches',
      route: './reactive/switches'
    }
  ]
}
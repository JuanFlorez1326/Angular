import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  // Forma 1 - Tradicional
  // public menuItems: MenuItem[] = [
  //   { title: 'Contador',   route: 'counter' },
  //   { title: 'Usuario',    route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' }
  // ];

  // Forma 2 - Signals
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador',   route: 'counter' },
    { title: 'Usuario',    route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' }
  ]);
}
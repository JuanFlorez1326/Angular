import { routes } from '../../app.routes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent implements OnInit {

  public menuItems!: Route[];

  ngOnInit(): void {
    this.getRoutes();
  }
  
  public getRoutes() {
    const items = routes.map( route => route.children ?? []).flat()
    .filter( route => route && route.path)
    .filter( route => route && !route.path?.includes(':'));
    this.menuItems = items;
  }
}
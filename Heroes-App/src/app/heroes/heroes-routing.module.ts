import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'all-heroes',
        component: AllHeroesComponent
      },
      {
        path: 'add-hero',
        component: AddHeroesComponent
      },
      {
        path: 'edit-hero/:id',
        component: AddHeroesComponent
      },
      {
        path: 'search-hero',
        component: SearchHeroesComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'all-heroes'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }

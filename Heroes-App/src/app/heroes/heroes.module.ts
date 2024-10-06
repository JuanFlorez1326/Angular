import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddHeroesComponent,
    SearchHeroesComponent,
    HeroeComponent,
    HomeComponent,
    AllHeroesComponent,
    CardHeroComponent,
    ImagePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    CardHeroComponent
  ]
})
export class HeroesModule { }

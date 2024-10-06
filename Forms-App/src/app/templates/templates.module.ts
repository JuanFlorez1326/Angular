import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { DynamicsComponent } from './components/dynamics/dynamics.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }

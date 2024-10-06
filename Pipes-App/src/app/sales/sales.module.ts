import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UpperPipe } from './pipes/custom-uppercase.pipe';
import { FlyingPipe } from './pipes/custom-flying.pipe';
import { OrderPipe } from './pipes/custom-order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrderComponent,
    UpperPipe,
    FlyingPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }

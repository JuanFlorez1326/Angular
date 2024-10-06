import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: '**',
        redirectTo: 'product'
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }

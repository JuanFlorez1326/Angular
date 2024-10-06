import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CouterPageComponent } from './pages/couter-page/couter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter',
        component: CouterPageComponent
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: '**',
        redirectTo: 'counter'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule {}
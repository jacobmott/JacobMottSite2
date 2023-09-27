import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalbattleComponent } from './totalbattle/totalbattle.component';
import { JacobmottComponent } from './jacobmott/jacobmott.component';
import { Webangularcompguide2023Component } from './webangularcompguide2023/webangularcompguide2023.component';
import { PotionsComponent } from './webangularcompguide2023/potions/potions.component';
import { WeaponsComponent } from './webangularcompguide2023/weapons/weapons.component';
import { WeaponComponent } from './webangularcompguide2023/weapons/weapon/weapon.component';
import { ErrorPageComponent } from './webangularcompguide2023/error-page/error-page.component';
import { ObserverComponent } from './webangularcompguide2023/observer/observer.component';

const routes: Routes = [
  { path: 'totalbattle', component: TotalbattleComponent },
  {
    path: 'webangularcompguide2023',
    component: Webangularcompguide2023Component,
    children: [
      {
        path: 'weapons',
        component: WeaponsComponent,
        children: [
          { path: ':id', component: WeaponComponent },
        ],
      },
      { path: 'potions', component: PotionsComponent },
      { path: 'observer', component: ObserverComponent },
    ],
  },
  { path: 'jacobmott', component: JacobmottComponent },
  { path: '', component: JacobmottComponent },
  // { path: '', redirectTo: 'jacobmott', pathMatch: 'full' }
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

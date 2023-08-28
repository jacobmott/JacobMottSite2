import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalbattleComponent } from './totalbattle/totalbattle.component';
import { JacobmottComponent } from './jacobmott/jacobmott.component';

const routes: Routes = [
  { path: 'totalbattle', component: TotalbattleComponent },
  { path: 'jacobmott',  component: JacobmottComponent},
  { path: '',  component: JacobmottComponent},
  // { path: '', redirectTo: 'jacobmott', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

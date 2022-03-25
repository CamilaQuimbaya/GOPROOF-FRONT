import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';

const routes: Routes = [
  {path:'',
    children:[
      {path: '', component: DashboardUserComponent},
      {path:'**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }

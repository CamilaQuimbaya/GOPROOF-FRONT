import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

import { HomeComponent } from './components/home/home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { MiProfileComponent } from './components/mi-profile/mi-profile.component';
import { MypointsComponent } from './components/mypoints/mypoints.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { BeforeLandingComponent } from './components/before-landing/before-landing.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: '', component: BeforeLandingComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: UserMenuComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'myprofile', component: MiProfileComponent},
  {path: 'mypoints', component: MypointsComponent},
  {path: 'booking', component:BookingsComponent},
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {path: 'dashboarduser',
  loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
  canActivate: [ValidarTokenGuard],
  canLoad: [ValidarTokenGuard]
  },
  {path: 'profile', component:ProfileComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';

import { HomeComponent } from './components/home/home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { MiProfileComponent } from './components/mi-profile/mi-profile.component';
import { MypointsComponent } from './components/mypoints/mypoints.component';
import { MapComponent } from './components/map/map.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { LogComponent } from './components/log/log.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProtectedModule } from './protected/protected.module';
import { AuthModule } from './auth/auth.module';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { BeforeLandingComponent } from './components/before-landing/before-landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistroBookingComponent } from './components/registro-booking/registro-booking.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    UserMenuComponent,
    DashboardComponent,
    RestaurantsComponent,
    CategoriesComponent,
    BenefitsComponent,
    MiProfileComponent,
    MypointsComponent,
    MapComponent,
    LoadingComponent,
    SearchBarComponent,
    BtnMyLocationComponent,
    LogComponent,
    SearchResultsComponent,
    BookingsComponent,
    UpdateProfileComponent,

    BeforeLandingComponent,
     ProfileComponent,
     RegistroBookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

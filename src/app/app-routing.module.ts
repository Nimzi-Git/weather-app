import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLandingComponent } from './modules/home/home-landing/home-landing.component';
import { WeatherDetailsComponent } from './modules/weather-display/weather-details/weather-details.component';
import { WeatherDetailComponent } from './modules/weather-display/weather-detail/weather-detail.component';


const routes: Routes = [
  {

    path: 'home',
    pathMatch: 'full',
    component: HomeLandingComponent,
    children: [
      {
        path: '',
        component: WeatherDetailsComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

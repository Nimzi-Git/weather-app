import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherDisplayRoutingModule } from './weather-display-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WeatherDetailsComponent, WeatherDetailComponent],
  imports: [
    CommonModule,
    WeatherDisplayRoutingModule,
  ]
})
export class WeatherDisplayModule { }

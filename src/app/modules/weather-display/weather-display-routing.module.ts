import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

export const weatherDetailRoute = [


    {
        path: 'home',
        children: [
            {
                path: ':id',
                component: WeatherDetailComponent

            }
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forChild(weatherDetailRoute)],
    exports: [RouterModule]
})
export class WeatherDisplayRoutingModule {}


import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../../../services/weather.service';
import { IWeatherDetails, IWeather } from '../../../model/weather-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent {

  @ViewChild('searchForm', {static: false}) searchForm: FormGroup;

  searchBoxOpenIndicator =  false;
  predictedCities: string[] =  [];
  cityWeathers: IWeather[] = [] ;
  cityName = '';
  cityWeatherFormattedObject: IWeatherDetails;


  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    this.resetValues();
    this.weatherService.increaseClickIndicator();
    this.weatherService.searchWeather(this.searchForm.value.cityname)
          .subscribe(ele => {
            this.cityName = ele.city.name;
            for  ( let i = 0; i < 5; i++) {
            const weatherListItem =  ele.list[i];
            this.cityWeathers.push(
              {
                  date: new Date(weatherListItem.dt * 1000),
                  temp: {min: weatherListItem.temp.min , max: weatherListItem.temp.max} ,
                  wind_speed: weatherListItem.speed,
                  description: weatherListItem.weather[0].description,
                  icon: weatherListItem.weather[0].icon
              }
            );
            }
            this.cityWeatherFormattedObject = {
              city: this.cityName,
              list: this.cityWeathers
           };

            this.weatherService.updateWeatherDetails(this.cityWeatherFormattedObject);
    });
  }

  resetValues() {
    this.cityName = '';
    this.cityWeathers = [];
    this.weatherService.updateIndexValue(0);
    this.weatherService.errorDetails$.next(null);
  }

}

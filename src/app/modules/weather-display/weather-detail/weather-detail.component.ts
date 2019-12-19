import { Component, OnInit, Input } from '@angular/core';
import { IWeatherDetails, IWeather } from 'src/app/model/weather-interface';
import { WeatherService } from '../../../services/weather.service';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  clickedIndex: BehaviorSubject<number>;
  weatherDetails$: BehaviorSubject<IWeatherDetails>;

  constructor(private ws: WeatherService) {}

  ngOnInit() {
    this.weatherDetails$ = this.ws.weatherDetails$;
    this.clickedIndex = this.ws.selectedIndex$;

  }

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { BehaviorSubject } from 'rxjs';
import { IWeatherDetails } from 'src/app/model/weather-interface';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  weatherDetails$: BehaviorSubject<IWeatherDetails>;
  selectedIndex$: BehaviorSubject<number>;
  errorDetails$: BehaviorSubject<string>;
  clickedInd = 0;
  constructor(private ws: WeatherService) {}

  ngOnInit() {
    this.weatherDetails$ = this.ws.weatherDetails$;
    this.selectedIndex$ = this.ws.selectedIndex$;
    this.errorDetails$ = this.ws.errorDetails$;
  }

  onNavClick(index: number) {
    this.ws.updateIndexValue(index);
  }

  getClickIndicator(): number {
    return this.ws.clickedInd;
  }

}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { IWeatherDetails } from '../model/weather-interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherDetails$ = new BehaviorSubject<IWeatherDetails>(null);
  selectedIndex$ = new BehaviorSubject<number>(0);
  selectedIndex = 0;
  errorDetails$ = new BehaviorSubject<string>(null);


  private _APPID: string;
  private _APPIURL: string;
  private _COUNT: string;


  public apiURL: string;
  public clickedInd = 0;
  constructor(private _http: HttpClient,
              private configService: ConfigService) { }

  public setURL(cityName: string) {
    const appConfigs = this.configService.config.data.serviceEndPoints;
    this._APPID = appConfigs.apiId;
    this._APPIURL = appConfigs.apiURL;
    this._COUNT = appConfigs.count;
    this.apiURL = this._APPIURL + cityName + '&appid=' + this._APPID + '&units=metric' + '&cnt=' + this._COUNT;
  }

  public searchWeather(cityName: string): Observable<any>  {
    this.setURL(cityName);

    return this._http.get(this.apiURL).pipe(
      catchError(err => {
        this.weatherDetails$.next(null);
        this.errorDetails$.next(err);
        return throwError(err);
      })
    );
  }

  public updateWeatherDetails(details: IWeatherDetails) {
    this.weatherDetails$.next(details);
  }

  public increaseClickIndicator() {
    this.clickedInd++;
  }

  public updateIndexValue(index: number) {
    this.selectedIndex = index;
    this.selectedIndex$.next(index);
  }
}

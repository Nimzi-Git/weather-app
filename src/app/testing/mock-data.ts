import { Observable } from 'rxjs';
import { IWeather, IWeatherDetails } from '../model/weather-interface';

export const fakeData: IWeatherDetails = {
    city: 'testCity',
    list: [
    {
      date: new Date(),
      temp: {min: '22', max: '32'},
      wind_speed: '4.35',
      description: 'Test des1',
      icon: 'test icon'
    },
    {
      date: new Date(),
      temp: {min: '21', max: '31'},
      wind_speed: '3.35',
      description: 'Test des2',
      icon: 'test icon2'
    },
    {
      date: new Date(),
      temp: {min: '23', max: '33'},
      wind_speed: '4.35',
      description: 'Test des3',
      icon: 'test icon3'
    },
    {
      date: new Date(),
      temp: {min: '24', max: '34'},
      wind_speed: '4.34',
      description: 'Test des4',
      icon: 'test icon4'
    },
    {
      date: new Date(),
      temp: {min: '25', max: '35'},
      wind_speed: '4.35',
      description: 'Test des5',
      icon: 'test icon5'
    },
  ]
  };


export class MockWeatherService {
    searchWeather(cityName: string) {
      return Observable.create(observer => {
        observer.next(fakeData);
      });
    }
  }


export const mockServiceData = {
    city: {name: 'testCity'},
    list: [
      {
        dt: 1234567890,
        temp: {min: '21', max: '31'},
        weather: [{
          description: 'Test Desc 1',
          icon: 'Test icon 1'
          }],
        speed: '4.35'
      },
      {
        dt: 1234567890,
        temp: {min: '22', max: '32'},
        weather: [{
          description: 'Test Desc 2',
          icon: 'Test icon 2'
          }],
        speed: '4.35'
      },
      {
        dt: 1234567890,
        temp: {min: '23', max: '33'},
        weather: [{
          description: 'Test Desc 3',
          icon: 'Test icon 3'
          }],
        speed: '4.35'
      },
      {
        dt: 1234567890,
        temp: {min: '24', max: '34'},
        weather: [{
          description: 'Test Desc 4',
          icon: 'Test icon 4'
          }],
        speed: '4.35'
      },
      {
        dt: 1234567890,
        temp: {min: '25', max: '35'},
        weather: [{
          description: 'Test Desc 5',
          icon: 'Test icon 5'
          }],
        speed: '4.35'
      },
  ]
  };

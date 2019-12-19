import { mockServiceData } from './../../../testing/mock-data';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingComponent } from './home-landing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from '../../../services/weather.service';
import { of } from 'rxjs';

describe('HomeLandingComponent', () => {
  let component: HomeLandingComponent;
  let fixture: ComponentFixture<HomeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      declarations: [ HomeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the city and cityWeathers values when resetValue() is called', () => {
    component.cityName = 'Test City';
    component.cityWeathers = [
      {
        date: new Date(),
        temp: {min: '22', max: '32'},
        wind_speed: '4.35',
        description: 'Test des',
        icon: 'test icon'
      }];

    component.resetValues();
    expect(component.cityName).toBe('');
    expect(component.cityWeathers).toEqual([]);
  });

  it('should update format the cityWeatherFormattedObject and emit when onSubmit is called', async(() => {
    component.cityWeathers = [];
    const mockData = mockServiceData;
    const weatherService = fixture.debugElement.injector.get(WeatherService);
    spyOn(weatherService, 'searchWeather').and.returnValue(
      of(mockData)
    );
    component.onSubmit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      weatherService.weatherDetails$.subscribe(ele => {
        expect(ele.city).toBe(mockData.city.name);
        expect(component.cityWeathers.length).toEqual(5);

        expect(component.cityWeathers.length).toBe(5);
        expect(component.cityWeathers[1].description).toBe('Test Desc 2');
        expect(component.cityWeatherFormattedObject.city).toBe('testCity');
      });
    });
  }));
});

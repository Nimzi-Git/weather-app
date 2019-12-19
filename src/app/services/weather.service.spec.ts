import { fakeData, mockServiceData } from './../testing/mock-data';
import { TestBed, async } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('WeatherService', () => {

  let service: WeatherService;
  let httpMock: HttpTestingController;
  const mockReturnData =  fakeData;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
     });
      service = TestBed.get(WeatherService);
      httpMock = TestBed.get(HttpTestingController);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate the number of return items', () => {
    service.setURL('kolkata');
    service.searchWeather('kolkata').subscribe(weatherDet => {
      expect(weatherDet).toEqual(mockReturnData);

    });
    const request = httpMock.expectOne(`${service.apiURL}`);
    expect(request.request.method).toBe('GET');

    request.flush(mockReturnData);
  });

  it('updateWeatherDetails', () => {
    service.updateWeatherDetails(mockReturnData);
    service.weatherDetails$.subscribe(ele => expect(ele).toBeTruthy());
  });

  it('should increase clickInd value when increaseClickIndicator() is called', () => {
    service.clickedInd = 0;
    service.increaseClickIndicator();
    expect(service.clickedInd).toBe(1);
  });

  it('should assign the selectedIndex value when updateIndexValue() is called', ()=> {
    service.selectedIndex = 0;
    service.updateIndexValue(1);
    expect(service.selectedIndex).toBe(1);
    service.selectedIndex$.subscribe(ele => expect(ele).toBe(1));
  });

  it('error call', async((done) => {
    let response: any;
    let errResponse: any;
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';

    service.searchWeather('testCity').subscribe(
      res => response = res,
      err => errResponse = err
    );

    httpMock.expectOne(`${service.apiURL}`).flush(data, mockErrorResponse);
    expect(errResponse.status).toBe(400);
    httpMock.verify();
  }));
});

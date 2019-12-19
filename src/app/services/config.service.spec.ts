import { TestBed } from '@angular/core/testing';

import { ConfigService, IAppConfigInterface } from './config.service';

describe('ConfigService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});

});

  it('should be created', () => {
    const service = TestBed.get(ConfigService);

    expect(service).toBeTruthy();
  });

  it('should return the configuration object', () => {
    const service = TestBed.get(ConfigService);

    service.load();
    expect(service.config.data.serviceEndPoints.apiURL).toBe('https://api.openweathermap.org/data/2.5/forecast/daily?q=');
    expect(service.config.data.serviceEndPoints.apiId).toBe('2e7e1d8fabd7c153330e11d1f13782d9');
  });
});

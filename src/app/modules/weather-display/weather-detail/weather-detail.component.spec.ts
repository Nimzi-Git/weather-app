import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailComponent } from './weather-detail.component';
import { WeatherService } from '../../../services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ WeatherDetailComponent ],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

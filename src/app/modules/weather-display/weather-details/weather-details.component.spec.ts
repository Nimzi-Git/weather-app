import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsComponent } from './weather-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from '../../../services/weather.service';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { mockServiceData } from 'src/app/testing/mock-data';
import { BehaviorSubject, of } from 'rxjs';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ WeatherDetailsComponent, WeatherDetailComponent ],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial text message when the application gets loaded(or clickedInd === 0)', () => {
    component.clickedInd = 0;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('Please Search Weather Of Your Favourite City');
  });

  it('should change selectedIndex$ on onNavClick call', async(() => {
    const weatherService = fixture.debugElement.injector.get(WeatherService);
    component.onNavClick(2);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      component.selectedIndex$.subscribe(ele => expect(ele).toEqual(2));
    });
  }));
});

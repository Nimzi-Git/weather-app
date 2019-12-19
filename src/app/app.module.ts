import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { WeatherDisplayModule } from './modules/weather-display/weather-display.module';
import { ConfigService, IAppConfigInterface } from './services/config.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function initConfigService(config: ConfigService) {
  config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    WeatherDisplayModule,
    HttpClientModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

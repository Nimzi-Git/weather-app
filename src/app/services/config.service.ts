import { Injectable } from '@angular/core';
import ApiConfig from '../config/api/api-config.json';

export interface IAppConfigInterface {
  data: {
    serviceEndPoints: {
      apiId: string,
      apiURL: string
      count: string
    }
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: IAppConfigInterface;

  get config(): IAppConfigInterface {
    return this._config;
  }

  constructor() {
    this.load();
  }

  load() {
    this._config =  ApiConfig;
  }
}


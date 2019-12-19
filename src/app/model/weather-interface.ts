export interface ITempVariation {
    min: string;
    max: string;
}
export interface IWeather {
  date: Date;
  temp: ITempVariation;
  wind_speed: string;
  description: string;
  icon: string;
}

export interface IWeatherDetails {
    city: string;
    list: IWeather[];
}


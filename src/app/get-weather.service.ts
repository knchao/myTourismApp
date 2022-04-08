import { Injectable } from '@angular/core';
import { CitiesWeather } from './cities/city-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor() { }
  
  getWeather() {
    return CitiesWeather;
  }

}

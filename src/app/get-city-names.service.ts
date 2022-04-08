import { Injectable } from '@angular/core';
import { CityWeather } from './cities/city-info';
import { GetWeatherService } from './get-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {

  arrayWeather!:CityWeather[];
  arrayNames:string[] = [];

  constructor(private getWeatherService:GetWeatherService) {  }

  getNames() {
    this.arrayWeather = this.getWeatherService.getWeather();
    this.arrayNames= [];
    for(var i = 0; i < this.arrayWeather.length; i++){
      this.arrayNames.push(this.arrayWeather[i].name);
    }
    return this.arrayNames;
  }
}

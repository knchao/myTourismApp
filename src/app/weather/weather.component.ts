import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../cities/city-info';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData!:CityWeather[];

  constructor(private getWeatherService:GetWeatherService) { }

  ngOnInit() {
    this.weatherData = this.getWeatherService.getWeather();
  }

}

import { Component, OnInit } from '@angular/core';
import { GetCitiesService } from '../get-cities.service';
import { CityInfo } from './city-info';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities!:CityInfo[];
  color!:boolean;

  constructor(private getCitiesService: GetCitiesService) { }

  ngOnInit()  {
    this.cities = this.getCitiesService.getCities();
    this.color = this.colorIt();
  }

  colorIt(){
    for(var i = 0; i < this.cities.length; i++){
      if(this.cities[i].attractionSites.length < 3){
        return false;
      }
    }
    return true;
  }
}

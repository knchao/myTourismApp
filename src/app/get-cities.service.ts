import { Injectable } from '@angular/core';
import { CitiesInfo } from './cities/city-info-data'

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {


  constructor() { }

  getCities() {
    return CitiesInfo;
  }

}

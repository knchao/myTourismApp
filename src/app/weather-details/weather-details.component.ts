import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  name!: string;
  springN!: number;
  springM!: number;
  summerN!: number;
  summerM!: number;
  winterN!: number;
  winterM!: number;
  autumnN!: number;
  autumnM!: number;
  vf!: string;
  vt!: string;

  weatherCaption:string = "";

  cSpan:number = 2;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
   }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params) => {

       // console.log(params.get('name'));

        this.name = params.get('name')!;
        this.springN = parseInt(params.get('springN')!);
        this.springM = parseInt(params.get('springM')!);
        this.summerN = parseInt(params.get('summerN')!);
        this.summerM = parseInt(params.get('summerM')!);
        this.winterN = parseInt(params.get('winterN')!);
        this.winterM = parseInt(params.get('winterM')!);
        this.autumnN = parseInt(params.get('autumnN')!);
        this.autumnM = parseInt(params.get('autumnM')!);
        this.vf = params.get('visitFrom')!;
        this.vt = params.get('visitTo')!;
             });

  }

}

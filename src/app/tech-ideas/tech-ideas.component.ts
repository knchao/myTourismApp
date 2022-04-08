import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetCityNamesService } from '../get-city-names.service';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {

  cities:string[] =[];
  techIdeasForm;

 

  constructor(private getCityNamesService:GetCityNamesService, private formB:FormBuilder) {
    
       

       this.techIdeasForm = new FormGroup({
        name: new FormControl("", [Validators.required,Validators.minLength(3)]),
        age: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        brief: new FormControl('', [Validators.required, Validators.minLength(100) ]),
       
      }); 

      this.cities = getCityNamesService.getNames();
  
  }

  

  get name(){
    return this.techIdeasForm.get('name');
  }

  get age(){
    return this.techIdeasForm.get('age');
  }

  get email(){
    return this.techIdeasForm.get('email');
  }
  get city(){
    return this.techIdeasForm.get('city');
  }
  get brief(){
    return this.techIdeasForm.get('brief');
  }

  ngOnInit(): void {
  }

  onClick(){
    let getBrief = this.brief;
    console.log(getBrief!.value);
    this.techIdeasForm.reset();

  }
}

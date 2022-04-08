import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';
import { TechIdeasComponent } from './tech-ideas/tech-ideas.component';

const routes: Routes = [

  {path: '', pathMatch: "full", redirectTo: "home"},
  {path: 'home', component:HomeComponent},
  {path: 'cities', component:CitiesComponent},
  {path: 'weather', component:WeatherComponent,
    children:[
       {path: ':name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo', component: WeatherDetailsComponent}
      ]
    },
  
    {path: 'techIdeas', component: TechIdeasComponent},
    {path: '**', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

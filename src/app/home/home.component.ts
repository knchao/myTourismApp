import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pyramidsUrl = "assets/sphinx-1175828__340.webp";

  constructor() { }

  ngOnInit(): void {
  }

}

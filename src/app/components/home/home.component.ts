import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private placesService: PlacesService) { }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  ngOnInit(): void {
  }

}

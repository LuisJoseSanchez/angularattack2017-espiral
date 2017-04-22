import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecopoints-map',
  templateUrl: './ecopoints-map.component.html',
  styleUrls: ['./ecopoints-map.component.scss']
})
export class EcopointsMapComponent implements OnInit {

  lat: number = 36.693466;
  lon: number = -4.440807;

  constructor() { }

  ngOnInit() {
  }

}

import { EcoPoint } from './../model/EcoPoint';
import { EcopointsService } from './../model/ecopoints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecopoints-map',
  templateUrl: './ecopoints-map.component.html',
  styleUrls: ['./ecopoints-map.component.scss']
})
export class EcopointsMapComponent implements OnInit {

  lat: number = 36.720692;
  lon: number = -4.427240;

  ecoPoints: EcoPoint[];

  constructor(public ecoPointsService: EcopointsService) { }

  ngOnInit() {
    this.ecoPoints = this.ecoPointsService.allEcoPoints();
  }

}

import { EcoPoint } from './../model/EcoPoint';
import { EcopointsService } from './../model/ecopoints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecopoints-list',
  templateUrl: './ecopoints-list.component.html',
  styleUrls: ['./ecopoints-list.component.scss']
})
export class EcopointsListComponent implements OnInit {

  ecoPoints: EcoPoint[];

  constructor(public ecoPointsService: EcopointsService) {
  }

  ngOnInit() {
    this.ecoPoints = this.ecoPointsService.allEcoPoints();
  }

}

import { EcoPoint } from './EcoPoint';
import { Injectable } from '@angular/core';

@Injectable()
export class EcopointsService {

  constructor() { }

  allEcoPoints(): EcoPoint[] {
    let ecoPoints = [
      {
        "id": 1,
        "type": "intelligent lighting",
        "description": "This intelligent lighting is charged by the sun and is automated switch on when needed",
        "address": "C/ Tomás Heredia",
        latitude: 36.717300,
        longitude: -4.423480,
        picture: ""
      },

      {
        "id": 2,
        "type": "wind-power generator",
        "description": "Generate electricity from the wind.",
        "address": "Calle Pacífico",
        latitude: 36.688162,
        longitude: -4.444187,
        picture: ""
      }

    ];

    return ecoPoints;
  }

}

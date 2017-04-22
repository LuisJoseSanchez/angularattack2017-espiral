import { EcoPoint } from './EcoPoint';
import { Injectable } from '@angular/core';

@Injectable()
export class EcopointsService {

  constructor() { }

  allEcoPoints(): EcoPoint[] {
    let ecoPoints = [
      {
        "id": 1,
        "type": "lighting",
        "description": "Intelligent lighting is charged by the sun and is automated switch on when needed.",
        "address": "C/ Tomás Heredia, Málaga",
        latitude: 36.717300,
        longitude: -4.423480,
        icon: "light.png",
        picture: ""
      },

      {
        "id": 2,
        "type": "wind-power generator",
        "description": "Generate electricity from the wind.",
        "address": "Calle Pacífico, Málaga",
        latitude: 36.688162,
        longitude: -4.444187,
        icon: "windpower.png",
        picture: ""
      },

      {
        "id": 3,
        "type": "lighting",
        "description": "Wind powered street lights.",
        "address": "Calle Pacífico, Málaga",
        latitude: 36.692760,
        longitude: -4.440807,
        icon: "light.png",
        picture: ""
      },

      {
        "id": 4,
        "type": "lighting",
        "description": "Photovoltaic street lights.",
        "address": "Calle Pacífico, Málaga",
        latitude: 36.693769,
        longitude: -4.440904,
        icon: "light.png",
        picture: ""
      },

      {
        "id": 5,
        "type": "electric car charger",
        "description": "Generic electric car charger.",
        "address": "Calle Pacífico, Málaga",
        latitude: 36.693466,
        longitude: -4.440807,
        icon: "carcharger.png",
        picture: ""
      },

      {
        "id": 6,
        "type": "free parking",
        "description": "Free parking for electric vehicles.",
        "address": "C/Jovellanos, Málaga",
        latitude: 36.712314,
        longitude: -4.429935,
        icon: "parking.png",
        picture: ""
      },

      {
        "id": 7,
        "type": "zem2all",
        "description": "Zem2All information and control center.",
        "address": "Avenida Sor Teresa Prat, 15 Málaga",
        latitude: 36.699961,
        longitude: -4.439399,
        icon: "zem2all.png",
        picture: ""
      },

      {
        "id": 8,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Comandante García Morato, 29004 Málaga",
        latitude: 36.668970,
        longitude: -4.482336,
        icon: "carcharger.png",
        picture: ""
      },

      {
        "id": 9,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Santa Rosa de Lima, 20-22, 29007 Málaga",
        latitude: 36.720431,
        longitude: -4.449527,
        icon: "carcharger.png",
        picture: ""
      },

      {
        "id": 10,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Andalucía, 6, 29007 Málaga",
        latitude: 36.717456,
        longitude: -4.449527,
        icon: "carcharger.png",
        picture: ""
      },

      {
        "id": 11,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Alonso Carrillo De Albornoz s/n, 29017",
        latitude: 36.720316,
        longitude: -4.360953,
        icon: "carcharger.png",
        picture: ""
      }

    ];

    return ecoPoints;
  }

}

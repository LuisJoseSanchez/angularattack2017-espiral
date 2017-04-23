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
        "latitude": 36.717300,
        "longitude": -4.423480,
        "icon": "light",
        "picture": ""
      },

      {
        "id": 2,
        "type": "wind-power generator",
        "description": "Generate electricity from the wind.",
        "address": "Calle Pacífico, Málaga",
        "latitude": 36.688162,
        "longitude": -4.444187,
        "icon": "windpower",
        "picture": ""
      },

      {
        "id": 3,
        "type": "lighting",
        "description": "Wind powered street lights.",
        "address": "Calle Pacífico, Málaga",
        "latitude": 36.692760,
        "longitude": -4.440807,
        "icon": "light",
        "picture": ""
      },

      {
        "id": 4,
        "type": "lighting",
        "description": "Photovoltaic street lights.",
        "address": "Calle Pacífico, Málaga",
        "latitude": 36.693769,
        "longitude": -4.440904,
        "icon": "light",
        "picture": ""
      },

      {
        "id": 5,
        "type": "electric car charger",
        "description": "Generic electric car charger.",
        "address": "Calle Pacífico, Málaga",
        "latitude": 36.693466,
        "longitude": -4.440807,
        "icon": "carcharger",
        "picture": ""
      },

      {
        "id": 6,
        "type": "free parking",
        "description": "Free parking for electric vehicles.",
        "address": "C/Jovellanos, Málaga",
        "latitude": 36.712314,
        "longitude": -4.429935,
        "icon": "parking",
        "picture": ""
      },

      {
        "id": 7,
        "type": "zem2all",
        "description": "Zem2All information and control center.",
        "address": "Avenida Sor Teresa Prat, 15 Málaga",
        "latitude": 36.699961,
        "longitude": -4.439399,
        "icon": "zem2all",
        "picture": ""
      },

      {
        "id": 8,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Comandante García Morato, 29004 Málaga",
        "latitude": 36.668970,
        "longitude": -4.482336,
        "icon": "carcharger",
        "picture": ""
      },

      {
        "id": 9,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Santa Rosa de Lima, 20-22, 29007 Málaga",
        "latitude": 36.720431,
        "longitude": -4.449527,
        "icon": "carcharger",
        "picture": ""
      },

      {
        "id": 10,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Andalucía, 6, 29007 Málaga",
        "latitude": 36.717456,
        "longitude": -4.449527,
        "icon": "carcharger",
        "picture": ""
      },

      {
        "id": 11,
        "type": "electric car charger",
        "description": "Fast electric car charging point.",
        "address": "Avenida Alonso Carrillo De Albornoz s/n, 29017",
        "latitude": 36.720316,
        "longitude": -4.360953,
        "icon": "carcharger",
        "picture": ""
      },

      {
        "id": 17,
        "type": "electric car charger",
        "description": "Electric car charging station.",
        "address": "Calle de la Explanada de la Estación, s/n Málaga",
        "latitude": 36.712008,
        "longitude": -4.431781,
        "icon": "carcharger",
        "picture": ""
      },

      {
        "id": 18,
        "type": "bus control center",
        "description": "Bus control and information center.",
        "address": "Camino de San Rafael, 97 Málaga",
        "latitude": 36.704181,
        "longitude": -4.453830,
        "icon": "bus",
        "picture": ""
      },

      {
        "id": 19,
        "type": "augmented reality",
        "description": "Augmented reality: information about the city.",
        "address": "Alameda Principal, Málaga",
        "latitude": 36.718006,
        "longitude": -4.422405,
        "icon": "ar",
        "picture": ""
      },

      {
        "id": 22,
        "type": "generic ecopoint",
        "description": "Municipal communications network.",
        "address": "C/ Concejal Muñoz Cerván, 3 Málaga",
        "latitude": 36.697500,
        "longitude": -4.438889,
        "icon": "ecopoint",
        "picture": ""
      },

      {
        "id": 25,
        "type": "generic ecopoint",
        "description": "Smarcity control center.",
        "address": "Calle Pacífico, 57 Málaga",
        "latitude": 36.693928,
        "longitude": -4.440807,
        "icon": "ecopoint",
        "picture": ""
      },

      {
        "id": 26,
        "type": "generic ecopoint",
        "description": "Environmental center Los Ruices. Biogas energy use.",
        "address": "Carretera de los Asperones FASE 1, s/n (Finca de los Ruices) Málaga",
        "latitude": 36.725113,
        "longitude": -4.501242,
        "icon": "ecopoint",
        "picture": ""
      },

      {
        "id": 30,
        "type": "radiation meter",
        "description": "Radiation meter.",
        "address": "Avenida Isaac Peral ,23 Málaga",
        "latitude": 36.695243,
        "longitude": -4.456411,
        "icon": "radiation",
        "picture": ""
      },

      {
        "id": 31,
        "type": "radiation meter",
        "description": "Radiation meter.",
        "address": "Paseo de Antonio Machado, 12 Málaga",
        "latitude": 36.710231,
        "longitude": -4.427265,
        "icon": "radiation",
        "picture": ""
      }

    ];

    return ecoPoints;
  }

}

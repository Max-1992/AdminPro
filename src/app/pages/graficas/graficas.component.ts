// Native Angular
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {

  // Declare Propertys
  public charts: any = {
    'chart1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'pie',
      'leyenda': 'El pan se come con'
    },
    'chart2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'pie',
      'leyenda': 'Entrevistados'
    },
    'chart3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'pie',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'chart4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'pie',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}

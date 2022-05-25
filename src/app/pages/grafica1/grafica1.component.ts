import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 10, 40, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };

}

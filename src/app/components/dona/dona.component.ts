import { Component, Input, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: string = '';


    // Doughnut
    @Input('labels') doughnutChartLabels: string[] = [ '1', '2', '3' ];
    @Input('data') doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [ 350, 450, 100 ],
          backgroundColor:['#42FF00','#F0FF00','#00A2FF']
        },

      ]
    };


  constructor() { }

  ngOnInit(): void {
  }

}

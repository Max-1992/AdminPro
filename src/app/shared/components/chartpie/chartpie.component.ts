// Native Angular
import { Component, OnInit, Input } from '@angular/core';

// ng2-charts
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.scss']
})
export class ChartppieChartDataieComponent implements OnInit {

  // Declare Propertys
  @Input() pieChartLabels: Label[];
  @Input() pieChartData: number[];
  @Input() pieChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}

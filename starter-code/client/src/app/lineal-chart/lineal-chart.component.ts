import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  SimpleChange
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-lineal-chart",
  templateUrl: "./lineal-chart.component.html",
  styleUrls: ["./lineal-chart.component.css"]
})
export class LinealChartComponent implements OnInit, OnChanges {
  @Input() keys: Array<string>;
  @Input() values: Array<number>;
  @Input() values2: Array<number>;
  @Input() values3: Array<number>;
  chart = [];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["values"]) {

      this.createChart();
    }
  }

  createChart() {
    this.chart = new Chart("canvas", {
      type: 'line',
      data: {
        labels: this.keys,
        datasets: [
          {
            label: "Avg. Engagement",
            data: this.values2,
            borderColor: "#ed5785",
            fill: false
          },
          {
            label: "Avg. Collaborative Culture Percept.",
            data: this.values,
            borderColor: "#4cca3f",
            fill: false
          },
          {
            label: "Avg. Competitive Culture Percept.",
            data: this.values3,
            borderColor: "#7884c5",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}

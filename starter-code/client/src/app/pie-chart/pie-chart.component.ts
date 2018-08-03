import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
@Input() values: any;
@Input() values2: any;
  chart = [];
  keys = [];

  constructor() {}

  ngOnInit() {
    console.log(this.values);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['values']) {
      console.log(this.values);
      this.createChart();

    }
  }
  createChart() {
    this.chart = new Chart("chart", {
      type: "pie",
      data: {
        labels: [' Male', ' Female'],
        datasets: [{
          label: 'Gender presence',
          data: [this.values, this.values2],
          backgroundColor: [
            'rgb(15%, 18%, 40%)',
            
            'rgb(84%, 11%, 45%)',
          ],
          borderColor: [
            'rgb(15%, 18%, 40%)',
            'rgb(84%, 11%, 45%)',
          ],
        borderWidth: 1
    }]
},
options: {
  legend: {
    display: false
  },
    scales: {
        yAxes: [
          {
            display: false
          }
        ],
            ticks: {
                beginAtZero: true
            }
        }
    }
});
}
}

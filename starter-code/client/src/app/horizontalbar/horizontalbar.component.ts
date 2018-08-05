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
  selector: 'app-horizontalbar',
  templateUrl: './horizontalbar.component.html',
  styleUrls: ['./horizontalbar.component.css']
})
export class HorizontalbarComponent implements OnInit {
  @Input() keys: Array<string>;
  @Input() values: Array<number>;
  
  chart = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes["values"]) {

      this.createChart();
    }
  }

  createChart() {
    this.chart = new Chart("horBar", {
      type: 'horizontalBar',
      data: {
        labels: this.keys,
        datasets: [
          {
            data: this.values,
            backgroundColor: '#272F62',
            borderColor: "#272F62",
            fill: true,
          },
        ]
      },
      options: {
        legend: {
          display: false
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


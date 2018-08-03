import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
@Input() values: Array<number>;
chart = [];

  constructor() { }

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes["values"]) {
      console.log(this.values);
      this.createChart();
    }
  }
    createChart(){
      this.chart = new Chart("pie-chart", {
        type: 'pie',
        data: [this.values],
        options: []
    });
  }
};


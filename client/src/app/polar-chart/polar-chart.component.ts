import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Chart } from "chart.js";
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllemployeesService } from '../../services/allemployees.service';
import { Http, Response } from '@angular/http';
import { AuthenticationService } from 'services/authentication.service';
import { SkillsService } from 'services/skills.service';


@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit {
  @Input() values: any;
@Input() values2: any;
@Input() labels: any;

  chart = [];
  constructor() { }

  ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges) {
      if (changes['values']) {
        console.log(this.values, this.values2);
        this.createChart();
  }
}

createChart() {
  this.chart = new Chart("polar", {
    type: 'radar',
    data: {
      labels: ["Javascript Frameworks", "Big Data environments", "AI trends" ],
      datasets: [
        {
          label: "Employee Level",
          data: this.values,
          borderColor: "#ed5785",
          fill: false
        },
        {
          label: "Position Required Level",
          data: this.values2,
          borderColor: "#7A85C0",
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false
          }
        ]
      }
    }
  });
}
}

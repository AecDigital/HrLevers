import { Component, OnInit } from '@angular/core';
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
  chart = [];
  constructor(public employee: AllemployeesService, private route: ActivatedRoute, private Auth: AuthenticationService, private skills: SkillsService) { }

  ngOnInit() {

    this.skills.getSkills().subscribe((skills) => {
      console.log(skills);
      this.skills = skills;
    });
  }
}
    // let canvas = <HTMLCanvasElement>document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");
    // this.chart = new Chart(ctx, {
    //   type: "radar",
  
    //   data: {
    //     labels: ["Drive", "Backhand", "Serve", "Volley", "Resistance"],
    //     datasets: [
    //       {
    //         label: "Your Statistics",
    //         data: [
    //           this.user.statisticsAverage.drive.length == 0
    //             ? 5
    //             : this.user.statisticsAverage.drive.reduce((a, b) => a + b) /
    //               this.user.statisticsAverage.drive.length,
    //           this.user.statisticsAverage.backhand.length == 0
    //             ? 5
    //             : this.user.statisticsAverage.backhand.reduce(
    //                 (a, b) => a + b
    //               ) / this.user.statisticsAverage.backhand.length,
    //           this.user.statisticsAverage.serve.length == 0
    //             ? 5
    //             : this.user.statisticsAverage.serve.reduce((a, b) => a + b) /
    //               this.user.statisticsAverage.serve.length,
    //           this.user.statisticsAverage.volley.length == 0
    //             ? 5
    //             : this.user.statisticsAverage.volley.reduce((a, b) => a + b) /
    //               this.user.statisticsAverage.volley.length,
    //           this.user.statisticsAverage.resistance.length == 0
    //             ? 5
    //             : this.user.statisticsAverage.resistance.reduce(
    //                 (a, b) => a + b
    //               ) / this.user.statisticsAverage.resistance.length
    //         ],
    //         borderColor: "rgba(20, 29, 222, 1)",
    //         backgroundColor: "rgba(20, 29, 222, 0.2)"
    //       },
    //       {
    //         label: ["  Media"],
    //         data: [1, 2, 5, 8, 4],
    //         borderColor: "rgba(255, 99, 132, 0.2)",
    //         backgroundColor: "rgba(255, 99, 132, 0.2)"
    //       }
    //     ]
    //   },
    //   options: {
    //     position:'left',
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     legend: {
    //       display: true,
    //       position: 'bottom',
    //       labels: {
              
    //       }
    //   },
    //     scale: {
    //       // Hides the scale
    //       ticks: {
    //         // changes here
    //         max: 10,
    //         min: 0
    //       }
    //     }
    //   }
    // });


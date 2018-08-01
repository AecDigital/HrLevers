import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infocounter',
  templateUrl: './infocounter.component.html',
  styleUrls: ['./infocounter.component.css']
})
export class InfocounterComponent implements OnInit {
  
  @Input() counter: number;
  @Input() counterTitle: string;
  constructor() { 

  }
  
  ngOnInit() {
  }

}

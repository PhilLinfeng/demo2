import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-table',
  templateUrl: './alert-table.component.html',
  styleUrls: ['./alert-table.component.css']
})
export class AlertTableComponent implements OnInit {

  cols: any[];
  data: any[];
  selectedValues: string[] = [];

  constructor() { }

  ngOnInit() {
    this.data = [
      {select: '01', accountNumber: 1, triggeringValues: 1, alertPriority: 1, scenario: 1, status: 1},
      {select: '02', accountNumber: 2, triggeringValues: 2, alertPriority: 2, scenario: 2, status: 2},
      {select: '03', accountNumber: 3, triggeringValues: 3, alertPriority: 3, scenario: 3, status: 3},
      {select: '04', accountNumber: 4, triggeringValues: 4, alertPriority: 4, scenario: 4, status: 4},
      {select: '05', accountNumber: 5, triggeringValues: 5, alertPriority: 5, scenario: 5, status: 5},
      {select: '06', accountNumber: 6, triggeringValues: 6, alertPriority: 6, scenario: 6, status: 6},
      {select: '07', accountNumber: 7, triggeringValues: 7, alertPriority: 7, scenario: 7, status: 7}
    ];
    this.cols = [
      { field: 'select', header: 'Select' },
      { field: 'accountNumber', header: 'Account Number' },
      { field: 'triggeringValues', header: 'Triggering Values' },
      { field: 'alertPriority', header: 'Alert Priority' },
      { field: 'scenario', header: 'Scenario' },
      { field: 'status', header: 'Status' }
    ];

  }

}

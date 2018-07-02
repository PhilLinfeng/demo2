import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Alerts',
        icon: 'fa fa-fw fa-file-o',
      },
      {
        label: 'F5',
        icon: 'fa fa-fw fa-edit',
      },
      {
        label: '视图',
        icon: 'fa fa-fw fa-question',
      },
      {
        label: '帮助',
        icon: 'fa fa-fw fa-gear',
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';

interface Account {
  name: string;
  code: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  accounts: Account[];
  selectedAccount: Account = {name: 'David', code: '1'};
  money: any;
  cols: any[];
  data: any[];
  transferShow: boolean = false;

  constructor() {
    this.accounts = [
      {name: 'David', code: '1'},
      {name: 'Emily', code: '2'},
      {name: 'Jason', code: '3'},
    ];
  }

  ngOnInit() {
    this.money = {
      assets: '1500.00',
      liabilities: '0.00'
    }
    this.cols = [
      {field: 'bankSavings', header: '银行存款'},
      {field: 'amount', header: '金额'},
      {field: 'depositTerm', header: '存期'},
      {field: 'interestRate', header: '利率'},
      {field: 'status', header: '状态'},
      {field: 'valueDate', header: '起息日'},
      {field: 'expiryDate', header: '到期日'}
    ]
    this.data = [
      {bankSavings: '活期结算户 人民币(子账户：00001)', amount: '223000.00', depositTerm: '不限期', interestRate: '0.3000', status: '活动', valueDate: '无起息日', expiryDate: '无到期日'}
    ]
  }

  changeAccount(code) {
    switch (code) {
      case '1': this.money = {assets: '1500.00', liabilities: '0.00'}; break;
      case '2': this.money = {assets: '50000.00', liabilities: '500.00'}; break;
      case '3': this.money = {assets: '3000.00', liabilities: '30.50'}; break;
    }
  }

  transfer() {
    this.transferShow = true;
  }

}

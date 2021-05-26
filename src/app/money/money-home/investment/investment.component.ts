import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../models/accounts.data';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  @Input() account: Account;
  constructor() { }

  ngOnInit(): void {
  }

}

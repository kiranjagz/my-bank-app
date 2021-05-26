import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../../models/accounts.data';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.scss']
})
export class ChequeComponent implements OnInit {
  @Input() account: Account;

  constructor() { }

  ngOnInit(): void {
  }

}

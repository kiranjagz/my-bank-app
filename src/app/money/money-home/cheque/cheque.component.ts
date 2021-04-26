import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../account.model';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.scss']
})
export class ChequeComponent implements OnInit {
  @Input() account: AccountModel;

  constructor() { }

  ngOnInit(): void {
  }

}

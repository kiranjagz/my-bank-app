import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared.data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  availableAccounts = [
    { display: 'Kiran - 1000', value: '1000' },
    { display: 'Bobbi - 2000', value: '2000' },
  ];
  accountNumber: string;

  constructor(private sharedDataService: SharedDataService) {
    this.accountNumber = this.availableAccounts[0].value;
  }

  ngOnInit(): void {
    this.sharedDataService.getAccountById(this.accountNumber);
  }

  onChanged(event) {
    this.accountNumber = event.target.value;
    this.sharedDataService.getAccountById(this.accountNumber);
  }
}

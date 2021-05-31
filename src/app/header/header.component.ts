import { Component, OnInit } from '@angular/core';
import { MenuService } from './../services/menu/menu.service';
import { SharedDataService } from '../shared.data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  availableAccounts = [
    { display: 'Please select', value: '0' },
    { display: 'Kiran - 1000', value: '1000' },
    { display: 'Bobbi - 2000', value: '2000' },
  ];
  accountNumber: string;

  constructor(
    private sharedDataService: SharedDataService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {}

  onChanged(event): void {
    console.log('onchanged clicked');
    this.accountNumber = event.target.value;
    this.sharedDataService.getAll(this.accountNumber);
  }

  setContext(menuItem: string): void {
    this.menuService.setMenu(menuItem);
    //TODO remove this and use in memory
    this.sharedDataService.getAll(this.accountNumber);
  }
}

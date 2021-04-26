import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { SharedDataService } from 'src/app/shared.data.service';
import { AccountModel } from './account.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-money-home',
  templateUrl: './money-home.component.html',
  styleUrls: ['./money-home.component.scss'],
})
export class MoneyHomeComponent implements OnInit, OnDestroy {
  chequeAccounts: AccountModel[] = [];
  investmentAccounts: AccountModel[] = [];
  subscription: Subscription;

  constructor(
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    console.log('Loading accounts');
    this.subscription = this.sharedDataService.getUpdateListener()
    .subscribe((accounts : AccountModel[]) => {
      this.chequeAccounts = accounts.filter(x => x.accountType.toLowerCase() == "cheque");
      this.investmentAccounts = accounts.filter(x => x.accountType.toLowerCase() == "investment");
      console.log(this.chequeAccounts);
      console.log(this.investmentAccounts);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

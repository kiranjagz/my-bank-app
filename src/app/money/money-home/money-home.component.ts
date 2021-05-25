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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-money-home',
  templateUrl: './money-home.component.html',
  styleUrls: ['./money-home.component.scss'],
})
export class MoneyHomeComponent implements OnInit, OnDestroy {
  allAccounts: AccountModel[] = [];
  chequeAccounts: AccountModel[] = [];
  investmentAccounts: AccountModel[] = [];
  subscription: Subscription;

  constructor(
    private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    console.log('Loading accounts');

    this.subscription = this.sharedDataService.accountUpdated.subscribe(() => {
      this.allAccounts = this.sharedDataService.getUpdateListener();
      this.chequeAccounts = this.allAccounts.filter(x => x.accountType.toLowerCase() === "cheque");
      this.investmentAccounts = this.allAccounts.filter(x => x.accountType.toLowerCase() === "investment");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

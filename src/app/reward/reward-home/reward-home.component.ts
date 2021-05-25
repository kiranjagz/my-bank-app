import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountModel } from 'src/app/money/money-home/account.model';
import { SharedDataService } from 'src/app/shared.data.service';

@Component({
  selector: 'app-reward-home',
  templateUrl: './reward-home.component.html',
  styleUrls: ['./reward-home.component.scss']
})
export class RewardHomeComponent implements OnInit, OnDestroy {
  allAccounts: AccountModel[] = [];
  redbucksAccounts: AccountModel[] = [];
  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {

    console.log('Loading accounts');

    this.subscription = this.sharedDataService.accountUpdated.subscribe(() => {
      this.allAccounts = this.sharedDataService.getUpdateListener();
      this.redbucksAccounts = this.allAccounts.filter(x => x.accountType.toLowerCase() === "redbucks");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

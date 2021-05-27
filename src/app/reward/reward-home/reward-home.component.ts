import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountData } from 'src/app/models/accounts.data';
import { Account } from 'src/app/models/accounts.data';
import { SharedDataService } from 'src/app/shared.data.service';

@Component({
  selector: 'app-reward-home',
  templateUrl: './reward-home.component.html',
  styleUrls: ['./reward-home.component.scss']
})
export class RewardHomeComponent implements OnInit, OnDestroy {
  allAccounts: AccountData;
  redbucksAccounts: Account[] = [];
  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {

    console.log('Loading accounts');

    this.subscription = this.sharedDataService.$accountUpdated.subscribe(response => {
      if(response === true){
        this.allAccounts = this.sharedDataService.accounts;
        this.redbucksAccounts = this.allAccounts.accounts.filter(x => x.accountType.toLowerCase() === "redbucks");
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

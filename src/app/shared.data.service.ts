import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountModel } from './money/money-home/account.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  private accounts: AccountModel[] = [];
  public accountUpdated = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  public getAccountById(id: string) : void {
    this.httpClient
      .get<{ message: string; accounts: any }>(
        'https://localhost:5003/api/Account/getaccountsbyid/' + id
      )
      .pipe(
        map((res) => {
          return res.accounts.map((account) => {
            return {
              idNumber: account.idNumber,
              availableBalance: account.availableBalance,
              totalBalance: account.totalBalance,
              accountType: account.accountType,
              interestEarned: account.interestEarned,
            };
          });
        })
      )
      .subscribe((transformedAccounts) => {
        console.log('transform of response to viewmodel');
        this.accounts = transformedAccounts;
        this.accountUpdated.next();
        //this.accountUpdated.next([...this.accounts]);
      });
  }

  public getUpdateListener() : AccountModel[] {
    console.log("Update listener called");
    console.log(this.accounts);
    return this.accounts;
  }

  public emitEvent(){
    this.accountUpdated.next()
  }
}

import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountModel } from './money/money-home/account.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  public message = new Subject<string>();
  private accounts: AccountModel[] = [];
  private accountUpdated = new Subject<AccountModel[]>();

  constructor(private httpClient: HttpClient) {}

  changeMessage(message: string) {
    this.message.next(message);
  }

  getAccount() {
    this.httpClient
      .get<{ message: string; accounts: any }>(
        'https://localhost:5001/api/Account/getaccountsbyid'
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
        this.accountUpdated.next([...this.accounts]);
      });
  }

  getAccountById(id: string) {
    this.httpClient
      .get<{ message: string; accounts: any }>(
        'https://localhost:5001/api/Account/getaccountsbyid/' + id
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
        this.accountUpdated.next([...this.accounts]);
      });
  }

  getUpdateListener() {
    console.log("Update listener called");
    return this.accountUpdated.asObservable();
  }
}

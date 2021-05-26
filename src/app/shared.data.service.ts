import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AccountData } from './models/accounts.data';
import { NotificationData } from './models/notification.data';

@Injectable()
export class SharedDataService {
  private accounts: AccountData;
  private notifications: NotificationData;
  public $accountUpdated = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  // public getAccountById(id: string): void {
  //   this.httpClient
  //     .get<AccountData>(
  //       'https://localhost:5003/api/Account/getaccountsbyid/' + id
  //     )
  //     .subscribe(
  //       (response) => {
  //         console.log('transform of response to viewmodel');
  //         this.accounts = response;
  //         console.log(this.accounts);
  //         this.accountUpdated.next();
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  public getNotificationbyId(id: string) : Observable<NotificationData> {
    return this.httpClient.get<NotificationData>('https://localhost:5003/api/account/getnotifications/' + id);
  }

  public getAccountById(id: string) : Observable<AccountData> {
    return this.httpClient.get<AccountData>('https://localhost:5003/api/account/getaccountsbyid/' + id);
  }

  public getAll(id: string){
    let accounts = this.getAccountById(id);
    let notifications =  this.getNotificationbyId(id);

    forkJoin([accounts,notifications]).subscribe(response => {
      this.accounts = response[0];
      this.notifications = response[1];

      this.accounts.notificationMessage = this.notifications.message;
      console.log(this.accounts);
      this.$accountUpdated.next();
    });
  }

  public getUpdateListener(): AccountData {
    console.log('Update listener called');
    console.log(this.accounts);
    return this.accounts;
  }

  public emitEvent() : void {
    this.$accountUpdated.next();
  }
}

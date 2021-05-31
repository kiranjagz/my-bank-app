import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AccountData } from './models/accounts.data';
import { NotificationData } from './models/notification.data';

@Injectable()
export class SharedDataService {
  public accounts: AccountData;
  public notifications: NotificationData;
  public $accountUpdated = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

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
      this.$accountUpdated.next(true);
    });
  }
}

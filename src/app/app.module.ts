import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChequeComponent } from './money/money-home/cheque/cheque.component';
import { InvestmentComponent } from './money/money-home/investment/investment.component';
import { MoneyHomeComponent } from './money/money-home/money-home.component';
import { SharedDataService} from './shared.data.service';
import { HttpClientModule } from '@angular/common/http';
import { RewardHomeComponent } from './reward/reward-home/reward-home.component';
import { MenuService } from './menu.service';
import { RedbucksComponent } from './reward/reward-home/redbucks/redbucks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChequeComponent,
    InvestmentComponent,
    MoneyHomeComponent,
    RewardHomeComponent,
    RedbucksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedDataService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

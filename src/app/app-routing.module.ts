import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoneyHomeComponent } from './money/money-home/money-home.component';
import { RewardHomeComponent } from './reward/reward-home/reward-home.component';

const routes: Routes = [
  {
    path: 'money',
    component: MoneyHomeComponent,
  },
  { path: 'reward', component: RewardHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

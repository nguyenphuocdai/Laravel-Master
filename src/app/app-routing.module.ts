import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { SendMoneyComponent } from "./send-money/send-money.component";
import { RequestMoneyComponent } from "./request-money/request-money.component";
import { CardBankAccountComponent } from './card-bank-account/card-bank-account.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "transactions", component: TransactionsComponent },
  { path: "send-money", component: SendMoneyComponent },
  { path: "request-money", component: RequestMoneyComponent },
  { path: "profile", component: ProfileComponent },
  { path: "card-bank-account", component: CardBankAccountComponent },
  { path: "deposit", component: DepositComponent },
  { path: "withdraw", component: WithdrawComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

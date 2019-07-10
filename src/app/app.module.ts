import { FooterComponent } from "./footer/footer.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { SendMoneyComponent } from "./send-money/send-money.component";
import { RequestMoneyComponent } from "./request-money/request-money.component";
import { ProfileComponent } from "./profile/profile.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { CardBankAccountComponent } from "./card-bank-account/card-bank-account.component";
import { WithdrawComponent } from "./withdraw/withdraw.component";
import { DepositComponent } from "./deposit/deposit.component";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "payyed" }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DashboardComponent,
    TransactionsComponent,
    SendMoneyComponent,
    RequestMoneyComponent,
    ProfileComponent,
    NotificationsComponent,
    CardBankAccountComponent,
    DepositComponent,
    WithdrawComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CreateAccountPageComponent } from './components/create-account-page/create-account-page.component';
import { MainLandingPageComponent } from './components/main-landing-page/main-landing-page.component';
import { IndividualItemPageComponent } from './components/individual-item-page/individual-item-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    CreateAccountPageComponent,
    MainLandingPageComponent,
    IndividualItemPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    AboutUsPageComponent,
    CategoryPageComponent,
    AccountPageComponent,
    OrderConfirmationComponent,
    UnderConstructionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

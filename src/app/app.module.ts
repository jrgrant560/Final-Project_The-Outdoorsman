import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { IndividualItemPageComponent } from './individual-item-page/individual-item-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AccountPageComponent } from './account-page/account-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';



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

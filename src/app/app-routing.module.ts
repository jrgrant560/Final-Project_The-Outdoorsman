import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { CreateAccountPageComponent } from './components/create-account-page/create-account-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainLandingPageComponent } from './components/main-landing-page/main-landing-page.component';
import { IndividualItemPageComponent } from './components/individual-item-page/individual-item-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: MainLandingPageComponent},
  {path: 'about', component: AboutUsPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'createAccount', component: CreateAccountPageComponent},
  {path: 'product/category/:category', component: CategoryPageComponent},
  {path: 'product/:id', component: IndividualItemPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'checkout/:userId', component: CheckoutPageComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  {path: 'account', component: AccountPageComponent},
  {path: 'confirmation', component: OrderConfirmationComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

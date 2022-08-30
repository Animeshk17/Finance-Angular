import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserLoginListComponent } from './user-login-list/user-login-list.component';

const routes: Routes = [
  {path: "userList", component: UserDetailsListComponent},
  {path: "userLoginDetailsList", component: UserLoginListComponent},
  {path: "addUser", component: AddUserComponent},
  {path: "userLogin", component: LoginPageComponent},
  {path: "adminLogin", component: AdminLoginComponent},
  {path: "forgotPassword", component: ForgotPasswordComponent},
  {path: "homePage", component: HomePageComponent},
  {path: "product", component : ProductDetailPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

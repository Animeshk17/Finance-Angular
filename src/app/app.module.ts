import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserLoginListComponent } from './user-login-list/user-login-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsListComponent,
    UserLoginListComponent,
    AddUserComponent,
    LoginPageComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

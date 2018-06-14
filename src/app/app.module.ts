import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule, routingComponents} from './app.routing';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentdetailComponent } from './employmentdetail/employmentdetail.component';
import { SESSION_STORAGE,StorageServiceModule } from 'ngx-webstorage-service';
import { SERVICE_STORAGE, MyStorageService } from './services/localstorage.service';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    routingComponents,
    RegistrationComponent,
    LoginComponent,
    EmploymentComponent,
    EmploymentdetailComponent,
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    NgxAutoScrollModule,
    
    BrowserAnimationsModule
  ],
  providers: [{ provide: SERVICE_STORAGE, useExisting: SESSION_STORAGE },
    MyStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

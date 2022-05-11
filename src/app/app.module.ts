import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { DummyComponent } from './component/dummy/dummy.component';
import { HelpComponent } from './component/help/help.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { JWTIntercepteurService } from './common/jwtintercepteur.service';
import { PhonePipe } from './common/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DummyComponent,
    HelpComponent,
    HomeComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:JWTIntercepteurService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

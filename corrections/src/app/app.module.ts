import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidatorsComponent } from './components/validators/validators.component';
import { RoutesComponent } from './components/routes/routes.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChildRouteOneComponent } from './components/routes/childRouteOne/child-route-one/child-route-one.component';
import { ChildRouteTwoComponent } from './components/routes/childRouteTwo/child-route-two/child-route-two.component';
import { SpinerComponent } from './components/http/spiner/spiner.component';
import { SpinnerInterceptor } from './components/http/spinner.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoComponent } from './components/validators/basic-info/basic-info.component';
import { AddressComponent } from './components/validators/address/address.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorsComponent,
    RoutesComponent,
    HttpComponent,
    ChildRouteOneComponent,
    ChildRouteTwoComponent,
    SpinerComponent,
    BasicInfoComponent,
    AddressComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

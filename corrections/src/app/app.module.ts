import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidatorsComponent } from './components/validators/validators.component';
import { RoutesComponent } from './components/routes/routes.component';
import { HttpComponent } from './components/http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildRouteOneComponent } from './components/routes/childRouteOne/child-route-one/child-route-one.component';
import { ChildRouteTwoComponent } from './components/routes/childRouteTwo/child-route-two/child-route-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorsComponent,
    RoutesComponent,
    HttpComponent,
    ChildRouteOneComponent,
    ChildRouteTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

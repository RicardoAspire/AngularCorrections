import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './components/http/http.component';
import { ChildRouteOneComponent } from './components/routes/childRouteOne/child-route-one/child-route-one.component';
import { ChildRouteTwoComponent } from './components/routes/childRouteTwo/child-route-two/child-route-two.component';
import { DataResolverService } from './components/routes/resolvers/data.resolver.service';
import { RoutesComponent } from './components/routes/routes.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
const routes: Routes = [
  /* {
    path: 'reactiveForms', 
    loadChildren: ()=> import ('./lazy/lazy.module').then(m => m.LazyModule)
  }, */
  {
    path: 'routes', 
    component: RoutesComponent, 
    resolve: {user: DataResolverService},
    data: {title: 'Data sended by the route'},
    children:[
      {path: 'ChildOne', component: ChildRouteOneComponent},
      {path: 'ChildTwo', component: ChildRouteTwoComponent}
    ]
  },
  { path: 'http', component: HttpComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

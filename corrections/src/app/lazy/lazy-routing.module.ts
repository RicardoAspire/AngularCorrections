import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';

const routesReactive: Routes = [
  {path:'reactiveForms', component: ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesReactive)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

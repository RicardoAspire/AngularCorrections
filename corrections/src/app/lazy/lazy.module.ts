import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }

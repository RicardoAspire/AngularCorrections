import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LazyModule {}

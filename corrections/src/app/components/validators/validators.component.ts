import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidations } from '../reactive-forms/utils/customValidation';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: ['',Validators.required],
        lastName:[],
        email:[],
        age:[0,MyValidations.isYounger]
      }),
      address: this.fb.group({
        street: [],
        number: [],
        postal: [],
        company: []
      })
    });
  }
}

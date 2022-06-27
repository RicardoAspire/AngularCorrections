import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { ValidatorsService } from 'src/app/services/validators.service';
import { MyValidations } from './utils/customValidation';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm!: FormGroup;
  users: any = '';  
  private readonly usernames = ['rix','ricardo'];

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.users = this.validatorsService.getUsers();
    this.userForm = this.fb.group({
      'firstName': new FormControl('',Validators.required, this.nameValidator()),
      'lastName': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.email, Validators.required]),
      'age': new FormControl(0,MyValidations.isYounger),
      'password': new FormControl(),
      'passwordTwo': new FormControl(),
    },{validator: this.passwordValidator});

    console.log(this.users)
  }

  private nameExists(name:string): Observable<boolean>{
    return of (this.usernames.includes(name)).pipe(delay(200));
  }

  private nameValidator(): AsyncValidatorFn{
    return (control: AbstractControl):Observable<ValidationErrors | null> =>
      this.nameExists(control.value)
      .pipe(
        map((response) => (response ? {userExists:true}: null))
      );
  }

  private passwordValidator (control: AbstractControl): {[key:string]:boolean} | null{
    const password = control.get('password');
    const passwordTwo = control.get('passwordTwo');
    if(password?.pristine || passwordTwo?.pristine){
      return null;
    } 
    return password && passwordTwo && password.value !== passwordTwo.value ? {'misMatch':true}: null;
  }

  saveForm(){
    console.log(this.userForm.value)
  }
}

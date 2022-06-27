import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public users = {
    'name':'Ricardo',
  }

  constructor() { }

  getUsers(){
    return this.users
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userHttp } from '../models/userHttp';
import { addUser } from '../models/userHttp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUser():Observable<userHttp>{
    return this.http.get<userHttp>("api/user");
  }

  addUser(data: addUser):Observable<addUser>{
    const body: addUser = {
      name:data.name,
      email:data.email
    }
    return this.http.post<addUser>("api/addUser", body);
  }

}
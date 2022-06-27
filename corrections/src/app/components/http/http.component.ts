import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  onModalCancel(onModalCancel: any) {
    throw new Error('Method not implemented.');
  }
  public user: any;
  constructor(private httpService:HttpService){}

  ngOnInit(): void {
    this.httpService.getUser()
    .subscribe(
      (success) =>{
        this.user = success;
        console.log(this.user);
      },(error) =>{
        console.log(error);
      }
    )
  }

}

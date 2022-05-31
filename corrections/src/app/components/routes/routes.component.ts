import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userHttp } from 'src/app/models/userHttp';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  public userComponent!: any | undefined;
  public dataFromRoute: any;

  constructor(
    private readonly route:ActivatedRoute,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.userComponent = this.route.snapshot.data['user']?.data;
    this.dataFromRoute = this.route.data;
    console.log(this.dataFromRoute.value.title)
  }

  showChildOne(){
    this.router.navigate(['ChildOne'], {relativeTo: this.route});
  }
  
  showChildTwo(){
    this.router.navigate(['ChildTwo'], {relativeTo: this.route});
  }
}

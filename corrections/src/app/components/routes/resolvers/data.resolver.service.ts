import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { userHttp } from "src/app/models/userHttp";
import { HttpService } from "src/app/services/http.service";

var users = ['Name','Name1','Name2']

@Injectable({ providedIn: 'root'})
export class DataResolverService implements Resolve<Observable<any>>{
    public user: userHttp | undefined;

    constructor(private httpService:HttpService){}
    
    
    resolve(route: ActivatedRouteSnapshot): Observable<any>{
        return this.httpService.getUser();
    }
}

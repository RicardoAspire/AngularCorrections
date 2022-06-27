import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { HttpService } from "src/app/services/http.service";

@Injectable({ providedIn: 'root'})
export class DataResolverService implements Resolve<Observable<any>>{

    constructor(private httpService:HttpService){}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any>{
        return this.httpService.getUser();
    }
}

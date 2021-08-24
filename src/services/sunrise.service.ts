import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class SunriseService {
    private url = 'https://api.sunrise-sunset.org/json'
    
    constructor(private http: HttpClient){}

    //consumimos api
    getData(lat:number | undefined, lng:number | undefined){
        return this.http.get(this.url+'?lat='+lat+'&lng='+lng);   
    }
}

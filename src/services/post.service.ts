import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private url = 'https://jsonplaceholder.typicode.com/posts'
    
    constructor(private http: HttpClient){}

    //consumimos api
    getData(){
        return this.http.get(this.url);   
    }
}
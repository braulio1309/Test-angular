import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { concatMap, delay, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'sunrise';
  lat: number | undefined;
  lng: number | undefined;
  sunrise:any;
  sunset:any;
  result;
  posts: any;
  constructor(private post:PostService){

      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })

      this.result = this.post.getData()
      .pipe(
        switchMap(async val => {
          console.log(val);
          return val;
        })
      )
      .subscribe((data) => {
       console.log(data)
       this.posts = data;
        
        
      })

      
    
     

    
  }
  

  
}








import { Component } from '@angular/core';
import { SunriseService } from 'src/services/sunrise.service';

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
  constructor(private sunrises:SunriseService){

      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })

      this.result = this.sunrises.getData(this.lat, this.lng).subscribe((data:any) => {
        this.sunrise = data.results.sunrise
        this.sunset = data.results.sunset
      })

      
    
     

    
  }
  

  
}








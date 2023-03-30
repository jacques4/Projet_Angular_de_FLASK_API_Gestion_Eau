import { Component , OnInit} from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { AuthService } from '../../services/auth.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  markers:any[] = [];

  constructor(private autService: AuthService,
    private clientService: ClientService){}
  
    zoom = 12;
    center!: google.maps.LatLngLiteral;
    options: google.maps.MapOptions = {
      mapTypeId: 'roadmap',
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8,
    };
  
    CurrenLat:any ;
    CurrentLon: any ;
  
    getLocation(){
      this.clientService.getLocation().then(resp=>{
        console.log(resp.lng);
        console.log(resp.lat);
      })
    }
  
    ngOnInit() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,   
        };
        
        console.log(position.coords.latitude,position.coords.longitude)
  
        this.CurrenLat=position.coords.latitude;
        this.CurrentLon= position.coords.longitude
  
        this.markers.push({
          position: {
            lat: this.CurrenLat + ((Math.random() - 0.5) * 2) / 10,
            lng: this.CurrentLon + ((Math.random() - 0.5) * 2) / 10,
          },
          label: {
            color: 'red',
            text: 'Ma position ' ,
          },
          title: 'Marker title ' + (this.markers.length + 1),
          options: { animation: google.maps.Animation.BOUNCE },
        })
      });
  
      this.getLocation();
  
    }
   
  
   
    zoomIn() {
      if (this.options.maxZoom != null && this.zoom < this.options.maxZoom) this.zoom++;
    }
  
  
    zoomOut() {
      if (this.options.minZoom !=null && this.zoom > this.options.minZoom) this.zoom--;
    }
  
}

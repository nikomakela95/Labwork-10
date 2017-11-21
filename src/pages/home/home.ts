import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    state:string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider, private storage:Storage) {
    
  }

  ionViewWillEnter(){
   this.storage.get('location').then((val) =>{
     if(val != null){
      this.location = JSON.parse(val);
     }else{
this.location ={
  city: 'Miami',
  state: 'FL'
}
     }
     this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather=> {
      this.weather = weather.current_observation;
     });

  
   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

//<!--Niko Mäkelä 1601538, Matias Rantanen 1601551-->
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  country:string;
  city:string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage ) {
    this.storage.get('location').then((val) =>{
      if(val != null){
        let location = JSON.parse(val);
        
        this.city = location.city;
        
      }else{
        this.country = 'Finland';
        this.city = 'Espoo';
        
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
//set new location which user gave
  saveForm(){
    let location = {
      country: this.country,
      city: this.city
      

    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}

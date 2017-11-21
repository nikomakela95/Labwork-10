import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



 //Niko Mäkelä 1601538
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
//Message after pressing the button
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
/**Adding function to button */
  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
    .then(data => {
      //If registerred succesfully
      console.log('got data ', data);
      this.alert('Registered!');
    })
    //Error message
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.user.value, this.password.value);
  }
    //Now console shows register details
}
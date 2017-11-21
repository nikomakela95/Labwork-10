import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

//Niko Mäkelä 1601538

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  //Adding AlertController and AngularFireAuth
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Alert message which pops up after pressing Sign in button
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  doLogin() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('You\'re now logged in');
      this.navCtrl.setRoot( TabsPage );
      // user is logged in
    })
      //define error message
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }
    //Now console shows the Login information


  openRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
